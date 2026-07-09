export const categories = [
  "Semua Produk",
  "Speaker",
  "Kipas",
  "Kompor",
  "Grill",
];

export const sortItems = ["Rilis Terbaru", "Nama A-Z", "Nama Z-A"];

export const outputs = [
  "15 Watt",
  "25 Watt",
  "35 Watt",
  "125 Watt",
  "150 Watt",
  "200 Watt",
];

export const subs = ['2"', '4"', '5"', '6.5"', '8"', '12"', '15"', '18"'];

export const images = [
  "/carousel1.png",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.png",
  "/carousel6.png",
];

export const cards = [
  {
    title: "Professional Line",
    description:
      "Dirancang untuk kebutuhan profesional dengan performa audio yang lebih kuat, stabil, dan presisi di setiap detail suara.",
    image: "/professional.svg",
  },
  {
    title: "Powered Speaker",
    description:
      "Speaker aktif dengan amplifier terintegrasi, menghadirkan suara jernih, praktis digunakan, dan siap digunakan kapan saja tanpa perangkat tambahan.",
    image: "/power.svg",
  },
  {
    title: "Multimedia Speaker",
    description:
      "Dirancang untuk kebutuhan hiburan digital, menghadirkan suara jernih dan seimbang untuk musik, film, hingga gaming dalam satu perangkat praktis.",
    image: "/multimedia.svg",
  },
  {
    title: "Compact Speaker",
    description:
      "Desain ringkas dengan performa maksimal, menghadirkan suara jernih dan bertenaga dalam ukuran yang praktis untuk berbagai kebutuhan.",
    image: "/compact.svg",
  },
];

export const menus = [
  { name: "Speaker" },
  { name: "Kipas" },
  { name: "Kompor" },
  { name: "Grill" },
];

export const subproducts = {
  ["Semua Produk"]: [],
  Speaker: [
    {
      id: 1,
      name: "Professional Line",
      image: "/professional.svg",
    },
    {
      id: 2,
      name: "Powered Speaker",
      image: "/power.svg",
    },
    {
      id: 3,
      name: "Multimedia Speaker",
      image: "/multimedia.svg",
    },
    {
      id: 4,
      name: "Compact Speaker",
      image: "/compact.svg",
    },
  ],
  Kipas: [
    {
      id: 1,
      name: "Commercial Grade Fan 1",
      image: "/kipas.png",
    },
    {
      id: 2,
      name: "Commercial Grade Fan 2",
      image: "/kipas.png",
    },
    {
      id: 3,
      name: "Commercial Grade Fan 3",
      image: "/kipas.png",
    },
  ],
  Kompor: [
    {
      id: 1,
      name: "Kompor Kaca",
      image: "/kompor.png",
    },
  ],
  Grill: [
    {
      id: 1,
      name: "Electric Grill",
      image: "/grill.webp",
    },
  ],
};
