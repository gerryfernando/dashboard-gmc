import Header from "./_components/Header";
import Material from "./_components/Content/Material";
import Product from "./_components/Content/Product";
import Quote from "./_components/Content/Quote";
import Feature from "./_components/Content/Feature";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center bg-no-repeat px-20"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      >
        <Header />

        <Product />
        <Quote />
      </section>
      <section className="py-10 px-20">
        <Material />
        <Feature />
      </section>
      <Footer />
    </div>
  );
}
