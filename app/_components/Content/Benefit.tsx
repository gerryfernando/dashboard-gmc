/* eslint-disable @next/next/no-img-element */
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Benefit() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".leftText", {
        x: -50,
        opacity: 0,
      })
        .to(
          ".rightText",
          {
            x: 50,
            opacity: 0,
          },
          0,
        )
        .to(
          ".speaker",
          {
            scale: 0.9,
            y: -200,
          },
          0,
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex justify-center items-center"
    >
      <h1 className="leftText font-semibold text-[36px] md:text-[77.22px] absolute top-70 left-60">
        Audio
      </h1>
      <h1 className="leftText font-semibold text-[36px] md:text-[77.22px] absolute left-20">
        Performa
      </h1>
      <img
        src="/speaker.svg"
        className="speaker w-[150px] h-[210px] md:w-[314px] md:h-421px"
        alt="Speaker"
      />
      <h1 className="rightText font-semibold text-[36px] md:text-[77.22px] absolute right-40">
        Presisi
      </h1>
      <h1 className="rightText font-semibold text-[36px] md:text-[77.22px] absolute bottom-60 right-70">
        Tinggi
      </h1>
    </section>
  );
}
