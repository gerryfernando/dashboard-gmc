import Image from "next/image";
import Link from "next/link";

const menus = [
  { name: "Speaker" },
  { name: "Kipas" },
  { name: "Kompor" },
  { name: "Grill" },
];

const abouts = [{ name: "Tentang Kami" }, { name: "Kontak" }];

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full px-20 py-10">
      <div className=" max-w-full flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src="/logo.png" alt="GMC" width={110} height={40} priority />
          </Link>

          <nav className="hidden gap-8 md:flex">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                className="border-b-2 border-transparent pb-1 text-base font-semibold leading-[14px] uppercase text-white hover:border-white"
                href={""}
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-8">
          {abouts.map((about) => (
            <Link
              key={about.name}
              className="border-b-2 border-transparent pb-1 text-base font-semibold leading-[14px] uppercase text-white hover:border-white"
              href={""}
            >
              {about.name}
            </Link>
          ))}

          <button className="rounded-full border border-white p-2">
            <Image src="/search.svg" alt="search icon" width={16} height={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
