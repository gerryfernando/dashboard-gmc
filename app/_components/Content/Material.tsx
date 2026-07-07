"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function Material() {
  const section = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.from(".left", {
        x: -150,
        opacity: 0,
      });

      tl.from(
        ".right",
        {
          x: 150,
          opacity: 0,
        },
        "<",
      );
    }, section);

    return () => ctx.revert();
  }, []);
  return (
    <section className="text-white">
      <div className="px-8 py-24">
        {/* Top */}
        <div className="flex items-end w-full justify-between">
          <div className="max-w-4xl">
            <span className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
              Keunggulan GMC
            </span>

            <h2 className="mt-10 text-2xl font-medium leading-tight">
              Dirancang dengan teknologi akustik dan material berkualitas
            </h2>

            <p className="mt-2 text-2xl leading-tight text-gray-500">
              Untuk menghasilkan suara presisi, jernih, dan seimbang di setiap
              frekuensi.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black">
              Left
            </button>

            <button className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black">
              Right
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-28 grid grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold">Material</h2>

            <p className="mt-4 max-w-md leading-relaxed text-gray-400">
              Dibuat dengan material kayu berkualitas, speaker GMC menghadirkan
              resonansi alami yang menghasilkan suara lebih hangat, solid, dan
              berkarakter.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-5 overflow-hidden">
            <div className="h-[520px] w-[180px] rounded-[40px] bg-zinc-900" />

            <div className="relative h-[520px] flex-1 overflow-hidden rounded-[40px]">
              <Image
                src="/material-main.png"
                alt="Material"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[520px] w-[180px] overflow-hidden rounded-[40px]">
              <Image
                src="/material-side.png"
                alt="Material"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
