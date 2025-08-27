import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';


const LIST_FOOTER_1 = [
  {
    logoImage: "/logo/LogoVideoBelajar.png",
    title: "Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!",
    address: "Jl. Usman Effendi No. 50 Lowokwaru, Malang",
    phone: "+62-877-7123-1234",
  },
];

const LIST_FOOTER_2 = [
  {
    title: "Kategori",
    list: [
      "Digital & Teknologi",
      "Pemasaran",
      "Manajemen Bisnis",
      "Pengembangan Diri",
      "Desain",
    ],
    isOpen: false,
  },
  {
    title: "Perusahaan",
    list: [
      "Tentang Kami",
      "FAQ",
      "Kebijakan Privasi",
      "Ketentuan Layanan",
      "Bantuan",
    ],
    isOpen: false,
  },
  {
    title: "Komunitas",
    list: ["Tips Sukses", "Blog"],
    isOpen: false,
  },
];

const LIST_FOOTER_SOCIAL = [
  {
    icon: <FaLinkedin />,
    link: "/",
  },
  {
    icon: <FaFacebookSquare />,
    link: "/",
  },
  {
    icon: <FaInstagramSquare />,
    link: "/",
  },
  {
    icon: <FaTwitterSquare />,
    link: "/",
  }
];

export { LIST_FOOTER_1, LIST_FOOTER_2, LIST_FOOTER_SOCIAL };
