import React, { useState } from "react"
import { Formik } from "formik"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import { Fade } from "../common/reveal"
import Snackbar from "../snackbar"
import {
  Container,
  Title,
  ContentContainer,
  StyledForm,
  IconsContainer,
  Field,
  Label,
  Input,
  TextArea,
  HelperText,
  SubmitButton,
} from "./styles"
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "../../config/variables"

const EMAIL_TEMPLATE_ID = "emeline_abreu_contact"
// EmailJS renamed the "user ID" to "public key"; it is the same value
const PUBLIC_KEY = process.env.GATSBY_EMAIL_JS_USER_ID

const validateForm = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Obrigatório"
  }
  if (!values.email) {
    errors.email = "Obrigatório"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email inválido."
  }
  if (!values.message) {
    errors.message = "Obrigatório"
  } else if (values.message.length < 10) {
    errors.message = "A mensagem deve conter no mínimo 10 caracteres."
  }
  return errors
}

const TextField = ({ id, label, multiline, error, helperText, ...props }) => {
  const Control = multiline ? TextArea : Input
  const helperId = `${id}-helper`

  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Control
        id={id}
        name={id}
        $invalid={error}
        aria-invalid={error}
        aria-describedby={helperText ? helperId : undefined}
        {...props}
      />
      {helperText && <HelperText id={helperId}>{helperText}</HelperText>}
    </Field>
  )
}

const FEEDBACK = {
  success: { variant: "success", message: "Mensagem enviada!" },
  error: {
    variant: "error",
    message:
      "Não foi possível enviar a mensagem. Tente novamente ou fale pelo WhatsApp.",
  },
}

const Contact = () => {
  const [feedback, setFeedback] = useState(null)

  return (
    <Fade>
      <Container>
        <Title>Contato</Title>
        <ContentContainer>
          <Formik
            initialValues={{ email: "", name: "", phone: "", message: "" }}
            validate={validateForm}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              const { name, email, phone, message } = values
              const variables = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                message: message,
              }
              // loaded on submit: keeps the SDK out of the initial bundle and
              // out of server rendering, where Gatsby would polyfill fetch
              import("@emailjs/browser")
                .then(({ default: emailjs }) =>
                  emailjs.send("sendgrid", EMAIL_TEMPLATE_ID, variables, {
                    publicKey: PUBLIC_KEY,
                  })
                )
                .then(() => {
                  setFeedback(FEEDBACK.success)
                  setSubmitting(false)
                  resetForm({})
                })
                .catch(() => {
                  setFeedback(FEEDBACK.error)
                  setSubmitting(false)
                })
            }}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              touched,
              errors,
              values,
              isSubmitting,
              isValid,
            }) => (
              <StyledForm onSubmit={handleSubmit} noValidate>
                <TextField
                  id="name"
                  label="Nome *"
                  placeholder="João Silva"
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name || ""}
                />
                <TextField
                  id="email"
                  type="email"
                  label="Email *"
                  placeholder="email@gmail.com"
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email || ""}
                />
                <TextField
                  id="phone"
                  type="tel"
                  label="Telefone"
                  placeholder="48999998888"
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone || ""}
                />
                <TextField
                  id="message"
                  label="Mensagem *"
                  placeholder="Digite sua mensagem aqui"
                  multiline
                  rows={3}
                  error={Boolean(touched.message && errors.message)}
                  helperText={touched.message && errors.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message || ""}
                />
                <SubmitButton disabled={isSubmitting || !isValid} type="submit">
                  Enviar
                </SubmitButton>
              </StyledForm>
            )}
          </Formik>
          <IconsContainer>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
              Emeline Abreu
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              Emeline Abreu
            </a>
            <a
              href="mailto:emeline.ntr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              emeline.ntr@gmail.com
            </a>{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              (48) 99802-5867
            </a>
          </IconsContainer>
          <Snackbar
            isOpen={Boolean(feedback)}
            variant={feedback?.variant}
            message={feedback?.message}
            onClose={() => setFeedback(null)}
          />
        </ContentContainer>
      </Container>
    </Fade>
  )
}

export default Contact
