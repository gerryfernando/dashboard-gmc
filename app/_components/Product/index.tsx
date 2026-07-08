import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFIlter";

export default function Product() {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    name: `Speaker ${890 + i}`,
    image: `${i + 1}.svg`,
  }));

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
