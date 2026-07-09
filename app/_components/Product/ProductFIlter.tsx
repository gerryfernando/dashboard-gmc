"use client";

import { useState } from "react";
import { Search, ChevronDown, SlidersHorizontal, Check } from "lucide-react";
import {
  categories,
  outputs,
  sortItems,
  subproducts,
  subs,
} from "@/app/_const/const";
import Image from "next/image";

type Category = keyof typeof subproducts;
type SubProducts = { id: number; name: string; image: string };

export default function ProductFilter() {
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Semua Produk");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);
  const [sort, setSort] = useState<string>(sortItems[0]);
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (value: string) => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold md:text-5xl">Produk</h1>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSelectedCategory(item as Category);
                setSelectedSubCategory([]);
              }}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm transition ${
                item === selectedCategory
                  ? "bg-white text-black"
                  : "border-white/20 text-gray-400 hover:bg-white hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex w-full items-center rounded-full border border-white/20 px-4 sm:w-64">
            <input
              placeholder="Cari produk"
              className="w-full bg-transparent py-2 outline-none"
            />
            <Search size={16} />
          </div>
        </div>
      </div>

      {selectedCategory !== "Semua Produk" && (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {subproducts[selectedCategory].map((product: SubProducts) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectedSubCategory((prev) => {
                  const array = [...prev];
                  const isExist = array.includes(product.name);

                  if (!isExist) {
                    array.push(product.name);

                    return array;
                  }

                  const newArray = array.filter(
                    (prod) => prod !== product.name,
                  );

                  return newArray;
                });
              }}
              className={`relative cursor-pointer p-8 flex h-10 items-center overflow-hidden rounded-2xl  ${
                selectedSubCategory.includes(product.name)
                  ? "bg-white text-black"
                  : "border-white/20 bg-[#2A2A2A] text-white hover:bg-white hover:text-black"
              }`}
            >
              <h3 className="z-10 text-[18px] font-semibold">{product.name}</h3>

              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="absolute bottom-[-15] right-1 object-contain"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex-col gap-4 md:flex-row mt-6 flex justify-between items-end md:items-center">
        <div className="text-white text-[14px] text-left">
          Menampilkan x dari y
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <button
              onClick={() => {
                setShowSort(!showSort);
                setShowFilter(false);
              }}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-2"
            >
              Urutkan
              <ChevronDown size={16} />
            </button>

            {showSort && (
              <div className="absolute right-0 z-50 mt-3 w-64 rounded-3xl bg-[#4b4b4bcc] p-5 backdrop-blur-xl">
                {sortItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSort(item);
                      setShowSort(false);
                    }}
                    className="mb-4 flex w-full items-center gap-3 text-left"
                  >
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                        sort === item ? "border-white" : "border-gray-400"
                      }`}
                    >
                      {sort === item && (
                        <div className="h-3 w-3 rounded-full bg-white" />
                      )}
                    </div>

                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setShowFilter(!showFilter);
                setShowSort(false);
              }}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-2"
            >
              Filter
              <SlidersHorizontal size={16} />
            </button>

            {showFilter && (
              <div className="absolute right-0 z-50 mt-3 w-[420px] rounded-[32px] bg-[#4b4b4bcc] p-6 backdrop-blur-xl max-sm:w-[90vw]">
                <h3 className="mb-4 text-xl font-semibold">Output</h3>

                <div className="mb-8 grid grid-cols-2 gap-y-4">
                  {outputs.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <div
                        onClick={() => toggle(item)}
                        className={`flex h-6 w-6 items-center justify-center rounded border ${
                          checked.includes(item)
                            ? "bg-white text-black"
                            : "border-gray-300"
                        }`}
                      >
                        {checked.includes(item) && <Check size={16} />}
                      </div>

                      {item}
                    </label>
                  ))}
                </div>

                <h3 className="mb-4 text-xl font-semibold">Ukuran Subwoofer</h3>

                <div className="grid grid-cols-2 gap-y-4">
                  {subs.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <div
                        onClick={() => toggle(item)}
                        className={`flex h-6 w-6 items-center justify-center rounded border ${
                          checked.includes(item)
                            ? "bg-white text-black"
                            : "border-gray-300"
                        }`}
                      >
                        {checked.includes(item) && <Check size={16} />}
                      </div>
                      {item} Inch
                    </label>
                  ))}
                </div>

                <div className="my-6 border-t border-white/20" />

                <div className="flex justify-end gap-4">
                  <button
                    className="cursor-pointer"
                    onClick={() => setChecked([])}
                  >
                    Batal
                  </button>

                  <button
                    className="cursor-pointer rounded-full bg-white px-8 py-3 font-semibold text-black"
                    onClick={() => setShowFilter(false)}
                  >
                    Terapkan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
