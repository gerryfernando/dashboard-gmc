import Image from "next/image";
import Link from "next/link";
import { Music2, ShoppingBag, Store } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="flex justify-between">
          {/* Left */}
          <div>
            <h2 className="max-w-xl text-[44px] font-semibold leading-tight uppercase">
              Teknologi <span className="text-[#6D6D6D]">Lokal</span>,
              <br />
              Standar Global
            </h2>

            <div className="mt-14 flex items-center gap-12">
              <Image src="/logo.png" alt="GMC" width={100} height={32} />

              <div className="flex items-center gap-5 text-gray-400">
                {/* <Instagram size={20} /> */}
                <Music2 size={20} />
                <ShoppingBag size={20} />
                <Store size={20} />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-28">
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

        {/* Divider */}
        <div className="my-10 h-px bg-white/20" />

        {/* Bottom */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>© 2026. GMC Elektronik. All Rights Reserved</p>

          <div className="flex gap-8">
            <Link href="#">Privacy & Cookies Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
