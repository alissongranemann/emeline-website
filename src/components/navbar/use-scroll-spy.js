import { useEffect, useState } from "react"

// Same rule as react-scrollspy, which this replaces: the active section is
// the first one still on screen once its box is moved by `offset`; at the
// very bottom of the page the last section wins if it is visible.
const useScrollSpy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState(undefined)

  useEffect(() => {
    let frame

    const isInView = el => {
      if (!el) return false
      const top = el.getBoundingClientRect().top + offset
      return top < window.innerHeight && top + el.offsetHeight > 0
    }

    const update = () => {
      frame = undefined
      const elements = ids.map(id => document.getElementById(id))
      const last = elements[elements.length - 1]
      const { scrollY, innerHeight } = window
      const atBottom =
        scrollY > 0 &&
        scrollY + innerHeight >= document.documentElement.scrollHeight

      const current =
        atBottom && isInView(last) ? last : elements.find(isInView)
      setActiveId(current?.id)
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })

    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ids, offset])

  return activeId
}

export default useScrollSpy
