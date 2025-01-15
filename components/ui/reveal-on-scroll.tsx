"use client"

import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

import { HTMLAttributes } from "react"

interface RevealOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function RevealOnScroll(props: RevealOnScrollProps) {
  const { children, className, ...divProps } = props
  const ref = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      })
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return (
    <div
      className={clsx(isIntersecting ? "opacity-1 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-md", "transition-[opacity,_transform,_filter] duration-700 delay-75", className)}
      ref={ref}
      {...divProps}
    >
      {children}
    </div>
  )
}