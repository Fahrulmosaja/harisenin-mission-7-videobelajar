import type { IProductsSchema } from "../../../types/ProductsCourseType";
import { apiInstance } from "../apiInstance";

interface TProducts {
  TProductsType?: string;
  productId?: string;
  newProducts?: IProductsSchema;
}

export const getProductCourses = async ({ TProductsType }: TProducts) => {
  try {
    const res = await apiInstance.get<IProductsSchema[]>(`${apiInstance.defaults.baseURL}/${TProductsType}`);
    return res.data;
  } catch (err) {
    console.log("Error fetching product courses:", err);
  }
};

export const getProductCoursesById = async ({ TProductsType, productId }: TProducts) => {
  try {
    const res = await apiInstance.get<IProductsSchema>(`${apiInstance.defaults.baseURL}/${TProductsType}/${productId}`);
    console.log(res.data);
  } catch (err) {
    console.log("Error fetching product course by ID:", err);
  }
};

export const postProductCourses = async ({ TProductsType, newProducts }: TProducts) => {
  try {
    const res = await apiInstance.post<IProductsSchema>(`${apiInstance.defaults.baseURL}/${TProductsType}`, newProducts);
    return res.data;
  } catch (err) {
    console.log("Error adding product:", err);
  }
};

export const putProductCourses = async ({ TProductsType, productId, newProducts }: TProducts) => {
  try {
    const res = await apiInstance.put<IProductsSchema>(`${apiInstance.defaults.baseURL}/${TProductsType}/${productId}`, newProducts);
    return res.data;
  } catch (err) {
    console.log("Error updating product:", err);
  }
};

export const deleteProductCourses = async ({ TProductsType, productId }: TProducts) => {
  if (!TProductsType || !productId) {
    console.error("Missing TProductsType or productId for delete");
    return;
  }
  try {
    const res = await apiInstance.delete(`${apiInstance.defaults.baseURL}/${TProductsType}/${productId}`);
    return res.data;
  } catch (err) {
    console.log("Error deleting product:", err);
    throw err;
  }
};