"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export default function Material() {
  const section = useRef<HTMLDivElement>(null);
  const images = [
    "/carousel1.png",
    "/carousel2.png",
    "/carousel3.png",
    "/carousel4.png",
    "/carousel5.png",
    "/carousel6.png",
  ];
  const texts = [
    {
      title: "Material",
      description:
        "Dibuat dengan material kayu berkualitas, speaker GMC menghadirkan resonansi alami yang menghasilkan suara lebih hangat, solid, dan berkarakter.",
    },
    {
      title: "Koneksi Tanpa Batas",
      description:
        "Dilengkapi Bluetooth, USB, AV Input, dan SD Card, speaker GMC memberikan kemudahan koneksi untuk berbagai perangkat dalam satu solusi praktis. ",
    },
    {
      title: "Performa Bass Lebih Kuat",
      description:
        "Didukung material kayu, speaker menghasilkan bass yang lebih solid dan suara yang mampu menjangkau seluruh ruangan.",
    },
    {
      title: "Bonus 2 Mikrofon UHF",
      description:
        "Dilengkapi 2 mikrofon UHF berkualitas, memberikan suara lebih jernih, stabil, dan bebas gangguan untuk pengalaman karaoke yang lebih maksimal.",
    },
    {
      title: "Dimensi Ideal",
      description:
        "Dengan ukuran proporsional, speaker GMC dirancang pas untuk berbagai ruang tanpa mengorbankan performa suara.",
    },
    {
      title: "Kekuatan Suara Maksimal",
      description:
        "Dukungan daya tinggi memberikan performa suara yang lebih bertenaga, dengan detail yang tetap terjaga di setiap frekuensi.",
    },
  ];
  const length = images.length;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  const prevIndex = (index - 1 + length) % length;
  const nextIndex = (index + 1 + length) % length;

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
      <div className="px-8 py-24 pb-0">
        <div className="flex items-end w-full justify-between">
          <div className="max-w-4xl">
            <span className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
              Keunggulan GMC
            </span>

            <h2 className="mt-10 text-[12px] md:text-2xl font-medium leading-tight">
              Dirancang dengan teknologi akustik dan material berkualitas
            </h2>

            <p className="mt-2 text-[12px] md:text-2xl leading-tight text-gray-500">
              Untuk menghasilkan suara presisi, jernih, dan seimbang di setiap
              frekuensi.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-full hover:bg-[#747474]"
            >
              <Image
                src="/left.svg"
                alt="left"
                width={48}
                height={48}
                priority
              />
            </button>

            <button
              onClick={next}
              className="flex items-center justify-center rounded-full hover:bg-[#747474]"
            >
              <Image
                src="/right.svg"
                alt="right"
                width={48}
                height={48}
                priority
              />
            </button>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              key={prevIndex}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h2 className="text-2xl md:text-5xl font-bold">
                {texts[index].title}
              </h2>

              <p className="mt-4 text-[14px] md:text max-w-md leading-relaxed text-gray-400">
                {texts[index].description}
              </p>
            </motion.div>
          </div>

          <div className="flex gap-5 overflow-hidden items-center justify-end">
            <div className="relative h-60 md:h-[420px] w-[700px] overflow-hidden">
              <motion.div
                key={prevIndex}
                animate={{
                  x: -120,
                  scale: 0.9,
                  opacity: 0.5,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0 h-60 w-60 md:h-[420px] md:w-[420px]"
              >
                <Image
                  src={images[prevIndex]}
                  alt=""
                  fill
                  className="rounded-[40px] object-cover"
                />
              </motion.div>

              <motion.div
                key={index}
                animate={{
                  x: 120,
                  scale: 1,
                  opacity: 1,
                  zIndex: 2,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0,
                  },
                }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-0 h-60 w-60 md:h-[420px] md:w-[420px]"
              >
                <Image
                  src={images[index]}
                  alt=""
                  fill
                  className="rounded-[40px] object-cover"
                />
              </motion.div>

              <motion.div
                key={nextIndex}
                initial={{
                  x: 520,
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  x: 360,
                  opacity: 0.6,
                  scale: 0.9,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0 h-60 w-60 md:h-[420px] md:w-[420px]"
              >
                <Image
                  src={images[nextIndex]}
                  alt=""
                  fill
                  className="rounded-[40px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
