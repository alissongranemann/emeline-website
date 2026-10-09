import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  max-width: 560px;
  margin: 4rem auto;
`

const Page = styled.canvas`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  & + & {
    margin-top: 2.5rem;
  }
`

const Status = styled.p`
  padding: 4rem 2rem;
  border-radius: 8px;
  background-color: #f1f1f1;
  text-align: center;
`

// the library weighs ~1.8 MB with its worker; wait until the reader is close
const LOAD_MARGIN = "600px 0px"
// sharp on retina screens without blowing up memory on very dense ones
const MAX_PIXEL_RATIO = 2

const loadPdfjs = async () => {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs")
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString()
  return pdfjs
}

// Renders every page of a PDF as a canvas, one under the other, so it reads
// the same everywhere; mobile browsers don't display PDFs inside a page
const PdfViewer = ({ url, title }) => {
  const containerRef = useRef(null)
  const [pdf, setPdf] = useState(null)
  const [failed, setFailed] = useState(false)

  // load the document once the reader gets near the viewport
  useEffect(() => {
    let cancelled = false
    let loaded

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        loadPdfjs()
          .then(pdfjs => pdfjs.getDocument({ url }).promise)
          .then(doc => {
            loaded = doc
            if (cancelled) doc.destroy()
            else setPdf(doc)
          })
          .catch(error => {
            console.error(error)
            if (!cancelled) setFailed(true)
          })
      },
      { rootMargin: LOAD_MARGIN }
    )
    observer.observe(containerRef.current)

    return () => {
      cancelled = true
      observer.disconnect()
      if (loaded) loaded.destroy()
    }
  }, [url])

  // draw the pages, in order, once their canvases are in the DOM
  useEffect(() => {
    if (!pdf) return undefined
    let cancelled = false
    const container = containerRef.current
    const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO)
    const canvases = container.querySelectorAll("canvas")

    const draw = async () => {
      for (let number = 1; number <= pdf.numPages && !cancelled; number++) {
        const page = await pdf.getPage(number)
        const canvas = canvases[number - 1]
        const width = canvas.clientWidth
        const scale = (width / page.getViewport({ scale: 1 }).width) * ratio
        const viewport = page.getViewport({ scale })
        canvas.width = Math.floor(viewport.width)
        canvas.height = Math.floor(viewport.height)
        await page.render({ canvas, viewport }).promise
      }
    }
    draw().catch(error => {
      console.error(error)
      if (!cancelled) setFailed(true)
    })

    return () => {
      cancelled = true
    }
  }, [pdf])

  const pages = pdf && !failed ? pdf.numPages : 0

  return (
    <Container ref={containerRef}>
      {failed && (
        <Status>
          Não foi possível mostrar o ebook aqui. Use o botão abaixo para
          baixá-lo.
        </Status>
      )}
      {!pdf && !failed && <Status role="status">Carregando o ebook…</Status>}
      {Array.from({ length: pages }, (_, index) => (
        <Page
          key={index}
          role="img"
          aria-label={`${title}, página ${index + 1} de ${pages}`}
        />
      ))}
    </Container>
  )
}

PdfViewer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PdfViewer
