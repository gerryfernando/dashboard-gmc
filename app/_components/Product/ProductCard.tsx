import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  product: {
    name: string;
    image: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <div className="mb-3 flex gap-2">
        <span className="rounded-full bg-zinc-700 px-3 py-1 text-xs">
          Speaker
        </span>

        <span className="rounded-full bg-zinc-700 px-3 py-1 text-xs">
          Professional Line
        </span>
      </div>

      <div className="relative flex h-[270px] items-center justify-center rounded-3xl bg-white">
        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={220}
          className="object-contain transition duration-300 hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>

      <button className="mt-5 flex w-full items-center justify-between rounded-full border border-white px-5 py-3 transition hover:bg-white hover:text-black">
        <span>Lihat detail</span>

        <div className="rounded-full bg-white p-2 text-black">
          <ArrowRight size={16} />
        </div>
      </button>
    </div>
  );
}
