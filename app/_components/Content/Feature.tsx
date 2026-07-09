import { cards } from "@/app/_const/const";
import Image from "next/image";

export default function Feature() {
  return (
    <section className="py-40 pb-0 flex justify-center">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {cards.map((item) => (
          <div
            key={item.title}
            className="
              relative flex h-auto w-auto md:w-175 md:h-45 overflow-hidden rounded-3xl bg-[#2A2A2A] p-6 cursor-pointer transition-all duration-300 hover:bg-[#747474] hover:shadow-2xl"
          >
            <div className="z-10 max-w-[70%]">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                {item.description}
              </p>
            </div>

            <div className="absolute right-0 bottom-0 h-full w-44">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
