"use client";

import clsx from "clsx";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface GameProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Game(props: GameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      });
    }, {rootMargin: "0px 0px -50px 0px"});

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <div
      className={clsx(`relative max-w-xl group even:self-end transition-all duration-500`, !isIntersecting && "opacity-0 translate-y-10")}
      ref={ref}
    >
      <div
        className={clsx(
          `gap-2 absolute xl:group-odd:-right-[calc(2rem+.1rem)] xl:-left-[calc(2rem+.1rem)] xl:group-odd:left-auto xl:translate-x-0 top-10 h-16 w-16 left-0 -translate-x-1/2 -z-10 border-foreground border-b-[.25rem] border-x-[.2rem] rounded-b-[20px]`
        )}
      />
      <div className="bg-muted rounded-md p-3">
        <div className={clsx("flex flex-col gap-2 items-center transition-all duration-500", !isIntersecting && "blur-lg")}>{props.children}</div>
      </div>
    </div>
  );
}
