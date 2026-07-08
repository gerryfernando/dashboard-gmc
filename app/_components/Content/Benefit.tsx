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
      <h1 className="leftText font-semibold text-[24px] md:text-[48px] lg:text-[50px] xl:text-[77.22px] absolute top-90 left-20 md:top-50 md:left-20 lg:top-50 lg:left-40 xl:top-60 xl:left-50">
        Audio
      </h1>
      <h1 className="leftText font-semibold text-[24px] md:text-[48px] lg:text-[50px] xl:text-[77.22px] absolute left-0 md:left-3 lg:left-10 xl:left-10">
        Performa
      </h1>
      <img
        src="/speaker.svg"
        className="speaker w-[150px] h-[210px] md:w-[250px] md:h-[390px] xl:w-[396px] xl:h-[531px]"
        alt="Speaker"
      />
      <h1 className="rightText font-semibold text-[24px] md:text-[48px] lg:text-[50px] xl:text-[77.22px] absolute right-10 md:right-20 lg:right-30 xl:right-30">
        Presisi
      </h1>
      <h1 className="rightText font-semibold text-[24px] md:text-[48px] lg:text-[50px] xl:text-[77.22px] absolute bottom-90 right-15 md:bottom-50 md:right-25 lg:bottom-50 lg:right-40 xl:bottom-50 xl:right-50">
        Tinggi
      </h1>
    </section>
  );
}
