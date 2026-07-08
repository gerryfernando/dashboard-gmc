import { Search, ChevronDown } from "lucide-react";

const categories = ["Semua Produk", "Speaker", "Kipas", "Kompor", "Grill"];

export default function ProductFilter() {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-5xl">Produk</h1>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item, i) => (
            <button
              key={item}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                i === 0
                  ? "bg-white text-black"
                  : "border-white/20 text-gray-400 hover:bg-white hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap">
          <div className="flex w-full items-center rounded-full border border-white/20 px-4 sm:w-64">
            <input
              placeholder="Cari produk"
              className="w-full bg-transparent py-2 outline-none"
            />
            <Search size={16} />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2">
            Urutkan
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2">
            Filter
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
