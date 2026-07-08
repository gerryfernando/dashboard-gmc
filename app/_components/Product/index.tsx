"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFIlter";

type Product = {
  name: string;
  image: string;
  id: number;
};
export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/product");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: Product[] = await res.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto px-10 py-16">
        <ProductFilter />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
