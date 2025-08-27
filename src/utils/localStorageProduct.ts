import type { IProduct } from "../components/views/AdminElements/ProductManage/Types";

const STORAGE_KEY = "products";

const DEFAULT_PRODUCTS: IProduct[] = [
  {
    id: "1",
    title: "React Fundamentals",
    name: "Budi",
    job: "React Fundamentals",
    price: 150000,
    imageProfile: "/content/profileMentor/Avatar-2.png",
    image: "/content/contentImage/content-2.jpg",
  },
  {
    id: "2",
    title: "Next.js Advanced",
    name: "Budi",
    job: "Next.js Advanced",
    price: 250000,
    imageProfile: "/content/profileMentor/Avatar-1.png",
    image: "/content/contentImage/content-1.jpg",
  },
];

export const localStorageProduct = {
  getStored: (): IProduct[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) return JSON.parse(data);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
      return DEFAULT_PRODUCTS;
    } catch (err) {
      console.error("❌ Error getStored:", err);
      return [];
    }
  },

  setStored: (products: IProduct[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  },

  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
};