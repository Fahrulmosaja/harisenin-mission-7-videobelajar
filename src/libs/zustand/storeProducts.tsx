import { create } from "zustand";
import type { IProductsSchema } from "../../types/ProductsCourseType";
import {
  getProductCourses,
  putProductCourses,
  postProductCourses,
  deleteProductCourses,
} from "../axios/services/productServices";

interface IStoreProductState {
  products: IProductsSchema[];
  getProducts: () => Promise<void>;
  addProduct: (product: IProductsSchema) => Promise<void>;
  updateProduct: (product: IProductsSchema) => Promise<void>;
  deleteProduct: (product: IProductsSchema) => Promise<void>;
}

export const storeProduct = create<IStoreProductState>()((set) => ({
  products: [],

  getProducts: async () => {
    try {
      const res = await getProductCourses({ TProductsType: "product-courses" });
      set({ products: res || [] });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  addProduct: async (products: IProductsSchema) => {
    try {
      const newProduct = await postProductCourses({
        TProductsType: "product-courses",
        newProducts: {
          ...products,
        },
      });
      if (newProduct) {
        set((state) => ({
          products: [...state.products, newProduct],
        }));
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },

  updateProduct: async (product) => {
    try {
      const updateProduct = await putProductCourses({
        TProductsType: "product-courses",
        productId: `${product.id}`,
        newProducts: product,
      });
      if (!updateProduct || !updateProduct.id) {
        console.error("Update failed: No product returned or missing id");
        return;
      }
      set((state) => ({
        products: state.products.map((p) =>
          p.id === updateProduct.id ? updateProduct : p
        ),
      }));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  },

  deleteProduct: async (product) => {
    try {
      await deleteProductCourses({
        TProductsType: "product-courses",
        productId: `${product.id}`,
      });
      set((state) => ({
        products: state.products.filter((p) => p.id !== product.id),
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
}));