import type { IProduct } from "../components/views/AdminElements/ProductManage/Types";

const STORAGE_KEY = "products_store";

export const useLocalStorage = {
  // Simpan Data
  getStorage: (): IProduct[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log(error);
      return [];
    };
  },

  setStorage: (products: IProduct[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
      console.log(error);
    }
  },

  // updatedStorage: (id: string, updates: Partial<IProduct>) => {
  //   try {
  //     const products = useLocalStorage.getStorage();
  //     const updatedProducts = products.map((product) => {
  //       if (product.id === id) {
  //         return {
  //           ...product,
  //           ...updates,
  //           updatedAt: new Date(),
  //         };
  //       }
  //       return product;
  //     });
  //     useLocalStorage.setStorage(updatedProducts);
  //     return updatedProducts.find((product) => product.id === id);
  //   } catch (error) {
  //     console.log("Error Updated data" error);
  //     throw error;
  //   }
  // },

  createProducts: (product: Omit<IProduct, "id" | "createdAt" | "updatedAt">) => {
    try {
      const products = useLocalStorage.getStorage();
      const newProduct: IProduct = {
        ...product,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedProducts = [...products, newProduct];
      useLocalStorage.setStorage(updatedProducts);
      return newProduct;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  deleteProducts: (id: string) => {
    try {
      const products = useLocalStorage.getStorage();
      const updatedProducts = products.filter((product) => product.id !== id);
      useLocalStorage.setStorage(updatedProducts);
      return updatedProducts;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  editedProduct: (product: IProduct) => {
    try {
      const products = useLocalStorage.getStorage();
      const updatedProducts = products.map((p) => {
        if (p.id === product.id) {
          return product;
        }
        return p;
      });
      useLocalStorage.setStorage(updatedProducts);
      return updatedProducts.find((p) => p.id === product.id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};