import Header from "./_components/Header";
import Material from "./_components/Content/Material";
import Benefit from "./_components/Content/Benefit";
import Quote from "./_components/Content/Quote";
import Feature from "./_components/Content/Feature";
import Footer from "./_components/Footer";
import Product from "./_components/Product";

export default function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center bg-no-repeat px-5 lg:px-20"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      >
        <Header />
        <Benefit />
        <Quote />
      </section>
      <section className="py-10 px-5 lg:px-20">
        <Material />
        <Feature />
      </section>
      <section className="py-10 px-5 lg:px-20">
        <Product />
      </section>
      <Footer />
    </div>
  );
}
