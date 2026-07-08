import { Search, ChevronDown } from "lucide-react";

const categories = ["Semua Produk", "Speaker", "Kipas", "Kompor", "Grill"];

export default function ProductFilter() {
  return (
    <>
      <h1 className="text-5xl font-bold">Produk</h1>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
        <div className="flex gap-2">
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

        <div className="flex gap-3">
          <div className="flex items-center rounded-full border border-white/20 px-4">
            <input
              placeholder="Cari produk"
              className="bg-transparent py-2 outline-none"
            />
            <Search size={16} />
          </div>

          <button className="flex items-center gap-2 rounded-full border border-white/20 px-5">
            Urutkan
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-full border border-white/20 px-5">
            Filter
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
