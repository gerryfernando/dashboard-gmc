"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const section = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
        },
      });
      tl.from(".title", {
        y: 150,
        opacity: 0,
      });

      tl.to(
        ".chip-left",
        {
          x: 200,
          y: -150,
        },
        0,
      );
      tl.to(
        ".chip-left-1",
        {
          x: -300,
          y: 125,
        },
        0,
      );

      tl.to(
        ".chip-right",
        {
          x: 200,
          y: -100,
        },
        0,
      );
      tl.to(
        ".chip-right-1",
        {
          x: -200,
          y: 150,
        },
        0,
      );

      tl.to({}, { duration: 0.5 });

      // Animate -> Base
      tl.to(
        ".chip-left",
        {
          x: 0,
          y: 100,
        },
        "<",
      );

      tl.to(
        ".chip-left-1",
        {
          x: 0,
          y: 100,
        },
        "<",
      );

      tl.to(
        ".chip-right",
        {
          x: 0,
          y: 100,
        },
        "<",
      );

      tl.to(
        ".chip-right-1",
        {
          x: 0,
          y: 100,
        },
        "<",
      );

      tl.to(
        ".title",
        {
          y: -200,
          opacity: 0,
          ease: "power2.out",
        },
        "<",
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <span className="chip-left font-normal text-[18px] absolute left-10 rounded-full bg-white/10 px-5 py-2">
        Compact Speaker
      </span>

      <span className="chip-left-1 text-[18px] absolute left-105 rounded-full bg-white/10 px-5 py-2">
        Multimedia Speaker
      </span>

      <div className="title text-center">
        <h2 className="text-[77.22px] font-bold">Jernih Kuat</h2>

        <h2 className="text-[77.22px] font-bold">di Setiap Momen</h2>
      </div>

      <span className="chip-right text-[18px] absolute right-105 rounded-full bg-white/10 px-5 py-2">
        Professional Line
      </span>

      <span className="chip-right-1 text-[18px] absolute right-10 rounded-full bg-white/10 px-5 py-2">
        Powered Speaker
      </span>
    </section>
  );
}
