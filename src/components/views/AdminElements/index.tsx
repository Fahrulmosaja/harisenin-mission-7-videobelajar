import React, { useEffect, useState } from "react";
import Button from "../../fragment/Button";
import { RiSearchLine } from "@remixicon/react";
import ProductModal from "./ProductManage/ProductModal";
import type { IProduct } from "./ProductManage/Types";
import { localStorageProduct } from "../../../utils/localStorageProduct";
import CardAdmin from "../../fragment/Card/CardAdmin";

const AdminElements = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedProducts = localStorageProduct.getStored();
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorageProduct.setStored(products);
    }
  }, [products]);

  const handleCreateProduct = (product: IProduct) => {
    setProducts([...products, product]);
  };

  const handleEditProduct = (product: IProduct) => {
    setEditProduct(product);
    setOpenModal(true);
  };

  const handleDeleteProduct = (product: IProduct) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            className="text-xs text-white py-3 px-4 rounded-md font-semibold"
            variant="btn-secondary"
            type="button"
            onClick={() => setOpenModal(true)}
          >
            + Tambah Produk
          </Button>
        </div>

        <div className="mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <CardAdmin
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>

        {/* Modal */}
        {openModal && (
          <ProductModal
            product={editProduct}
            onClose={() => {
              setOpenModal(false);
              setEditProduct(null);
            }}
            onSave={(product) => {
              if (editProduct) {
                setProducts(
                  products.map((p) => (p.id === product.id ? product : p))
                );
              } else {
                handleCreateProduct(product);
              }
              setOpenModal(false);
              setEditProduct(null);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default AdminElements;
