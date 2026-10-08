import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { MdClose as CloseIcon } from "react-icons/md"
import styled, { keyframes } from "styled-components"

const AUTO_HIDE_DURATION = 5000

const colors = { success: "#43a047", error: "#d32f2f" }

const grow = keyframes`
  from { opacity: 0; transform: scale(0.75); }
  to { opacity: 1; transform: none; }
`

const Root = styled.div`
  position: fixed;
  z-index: 1400;
  right: 8px;
  bottom: 8px;
  left: 8px;
  display: flex;
  justify-content: center;

  @media (min-width: 600px) {
    right: 24px;
    bottom: 24px;
    left: auto;
  }
`

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  padding: 6px 16px;
  border-radius: 4px;
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  background-color: ${({ $variant }) => colors[$variant]};
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  animation: ${grow} 225ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 600px) {
    flex-grow: initial;
    min-width: 288px;
  }
`

const Message = styled.span`
  padding: 8px 0;
`

const Action = styled.div`
  display: flex;
  align-items: center;
  margin-right: -8px;
  margin-left: auto;
  padding-left: 16px;
`

const CloseButton = styled.button`
  display: inline-flex;
  padding: 12px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  font-size: 1.7rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`

const CustomSnackbar = ({
  isOpen = false,
  message = "",
  onClose = () => {},
  variant = "success",
}) => {
  // keep the timer running across re-renders that pass a new onClose
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!isOpen) return undefined
    const timer = window.setTimeout(
      () => onCloseRef.current(),
      AUTO_HIDE_DURATION
    )
    return () => window.clearTimeout(timer)
  }, [isOpen, message])

  if (!isOpen) return null

  return (
    <Root>
      <Content role="alert" $variant={variant}>
        <Message>{message}</Message>
        <Action>
          <CloseButton type="button" aria-label="Fechar" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Action>
      </Content>
    </Root>
  )
}

CustomSnackbar.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "success"]),
}

export default CustomSnackbar
