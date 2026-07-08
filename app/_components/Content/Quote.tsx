"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const section = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });

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
          x: isMobile ? 50 : 200,
          y: isMobile ? -100 : -150,
        },
        0,
      );
      tl.to(
        ".chip-left-1",
        {
          x: isMobile ? -75 : -300,
          y: isMobile ? 75 : 125,
        },
        0,
      );

      tl.to(
        ".chip-right",
        {
          x: isMobile ? 50 : 200,
          y: isMobile ? -50 : -100,
        },
        0,
      );
      tl.to(
        ".chip-right-1",
        {
          x: isMobile ? -100 : -200,
          y: isMobile ? 100 : 150,
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
      <span className="chip-left font-normal text-[6px] md:text-[12px] xl:text-[18px] absolute left-[-2] md:left-10 lg:left-10 xl:left-20 rounded-full bg-white/10 px-5 py-2">
        Compact Speaker
      </span>

      <span className="chip-left-1 text-[6px] md:text-[12px] xl:text-[18px] absolute left-24 md:left-50 lg:left-60 xl:left-100 rounded-full bg-white/10 px-5 py-2">
        Multimedia Speaker
      </span>

      <div className="title text-center">
        <h2 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[77.22px] font-bold">
          Jernih Kuat
        </h2>

        <h2 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[77.22px] font-bold">
          di Setiap Momen
        </h2>
      </div>

      <span className="chip-right text-[6px] md:text-[12px] xl:text-[18px] absolute right-24 md:right-50 lg:right-60 xl:right-90 rounded-full bg-white/10 px-5 py-2">
        Professional Line
      </span>

      <span className="chip-right-1 text-[6px] md:text-[12px] xl:text-[18px] absolute right-0 md:right-10 lg:right-10 xl:right-20 rounded-full bg-white/10 px-5 py-2">
        Powered Speaker
      </span>
    </section>
  );
}
