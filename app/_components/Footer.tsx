import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-20">
      <div className="mx-auto px-8 py-20">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-[36px] text-center sm=text-left sm=text-[44px] font-semibold leading-tight uppercase">
              Teknologi <span className="text-[#6D6D6D]">Lokal</span>,
              <br />
              Standar Global
            </h2>

            <div className="mt-14 flex items-center flex-col sm:flex-row justify-between gap-12">
              <Image src="/logo.png" alt="GMC" width={126} height={36} />

              <div className="flex items-center gap-5 text-gray-400">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  height={20}
                  width={20}
                />
                <Image
                  src="/tiktok.svg"
                  alt="Tiktok"
                  height={20}
                  width={20}
                  className="hover:border-white"
                />
                <Image src="/shopee.svg" alt="Shopee" height={20} width={20} />
                <Image
                  src="/tokopedia.svg"
                  alt="Tokopedia"
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>

          <div className="hidden gap-28 md:flex">
            <div>
              <h4 className="mb-5 text-lg font-semibold">Kategori</h4>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#">Speaker</Link>
                </li>
                <li>
                  <Link href="#">Kipas</Link>
                </li>
                <li>
                  <Link href="#">Kompor</Link>
                </li>
                <li>
                  <Link href="#">Grill</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-semibold">Company</h4>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Produk</Link>
                </li>
                <li>
                  <Link href="#">Event</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/20" />

        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>© 2026. GMC Elektronik. All Rights Reserved</p>

          <div className="hidden md:flex gap-8">
            <Link href="#">Privacy & Cookies Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
