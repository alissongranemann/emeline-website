/**
 * Scroll-triggered entrance animations (replacement for react-reveal).
 *
 * Each direct child is wrapped in its own <div> and animated when it scrolls
 * into view. Server-rendered markup is fully visible; only content below the
 * fold at load time is hidden and revealed later, so crawlers, no-JS and
 * reduced-motion visitors always see everything.
 *
 * `cascade` staggers the children: the direct children when there are
 * several, otherwise the children of the single child (e.g. list items).
 */

import React, { useEffect, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"

const DURATION = 1000
const CASCADE_STEP = 150
const MAX_CASCADE_ITEMS = 20

const effects = {
  fade: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  zoom: keyframes`
    from { opacity: 0; transform: scale3d(0.1, 0.1, 0.1); }
    to { opacity: 1; transform: none; }
  `,
}

const animate = ({ $effect }) => css`
  animation: ${effects[$effect]} ${DURATION}ms ease-out both;
`

const Item = styled.div`
  ${({ $state }) => $state === "hidden" && "opacity: 0;"}

  ${({ $state, $cascade, $delay }) =>
    $state === "revealed" &&
    !$cascade &&
    css`
      ${animate}
      animation-delay: ${$delay}ms;
    `}

  ${({ $state, $cascade, $delay }) =>
    $state === "revealed" &&
    $cascade &&
    css`
      > * > * {
        ${animate}
      }

      ${Array.from(
        { length: MAX_CASCADE_ITEMS },
        (_, i) => `> * > *:nth-child(${i + 1}) {
          animation-delay: ${$delay + i * CASCADE_STEP}ms;
        }`
      ).join("\n")}
    `}
`

const RevealItem = ({ children, effect, delay, cascade }) => {
  const ref = useRef(null)
  // "visible": as rendered on the server / already on screen at load
  // "hidden": below the fold, waiting to scroll into view
  // "revealed": entrance animation running or done
  const [state, setState] = useState("visible")

  useEffect(() => {
    const el = ref.current
    if (
      !el ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      el.getBoundingClientRect().top < window.innerHeight
    ) {
      return undefined
    }

    setState("hidden")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("revealed")
          observer.disconnect()
        }
      },
      // trigger once the element's top passes 90% of the viewport height
      { rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <Item
      ref={ref}
      $state={state}
      $effect={effect}
      $delay={delay}
      $cascade={cascade}
    >
      {children}
    </Item>
  )
}

const Reveal = ({ children, effect, delay = 0, cascade = false }) => {
  const items = React.Children.toArray(children)
  const staggerItems = cascade && items.length > 1

  return items.map((child, i) => (
    <RevealItem
      key={child.key ?? i}
      effect={effect}
      delay={delay + (staggerItems ? i * CASCADE_STEP : 0)}
      cascade={cascade && !staggerItems}
    >
      {child}
    </RevealItem>
  ))
}

export const Fade = props => <Reveal effect="fade" {...props} />

export const Zoom = props => <Reveal effect="zoom" {...props} />
