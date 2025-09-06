import Button from "../../fragment/Button";
import { RiSearchLine } from "@remixicon/react";
import TableAdmin from "../../fragment/Table";
import { useEffect, useState } from "react";
import { storeProduct } from "../../../libs/zustand/storeProducts";
import type { IProductsSchema } from "../../../types/ProductsCourseType";
import ProductModal from "./ProductManage/ProductModal";

const AdminElements = () => {

  const { products, getProducts, deleteProduct } = storeProduct();
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<IProductsSchema | undefined>(undefined);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    setEditProduct(undefined);
    setShowModal(true);
  };

  const handleEdit = (product: IProductsSchema) => {
    console.log("Editing product:", product);
    setEditProduct(product);
    setShowModal(true);
  };

  const handleDelete = async (product: IProductsSchema) => {
    console.log("Deleting product:", product);
    if (confirm("Apakah kamu serius mau menghapus kursus ini?")) {
      await deleteProduct(product);
      await getProducts();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setEditProduct(undefined);
  }

  const handleFilteredProducts = () => {
    if (search.trim() === "") {
      return products;
    }
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className="max-w-[1200px] mx-auto mt-20">
      <div className="py-6 w-full">
        <div className="flex justify-between items-center py-2 px-5 w-full bg-[#21222D] rounded-md gap-2">
          <div className="flex items-center gap-2 bg-white rounded-md shadow-md px-3">
            <RiSearchLine size={20} />
            <input
              type="text"
              className="w-full px-2 py-1 text-sm font-dmsans focus:outline-none"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleFilteredProducts();
              }}
            />
          </div>
          <Button
            className="text-xs text-white py-3 px-4 rounded-md font-semibold"
            variant="btn-secondary"
            type="button"
            onClick={() => { handleAdd() }}
          >
            + Tambah Produk
          </Button>
        </div>
        <div>
          <TableAdmin
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          {showModal && (
            <ProductModal onClose={handleClose} onEdit={editProduct} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminElements;
