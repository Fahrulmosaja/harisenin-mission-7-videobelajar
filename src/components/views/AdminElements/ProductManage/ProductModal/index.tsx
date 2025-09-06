import Button from "../../../../fragment/Button";
import type { IProductsSchema } from "../../../../../types/ProductsCourseType";
import { storeProduct } from "../../../../../libs/zustand/storeProducts";
import React, { useEffect, useState } from "react";

interface ProductModalProps {
  onClose: () => void
  onEdit: IProductsSchema | undefined
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose, onEdit }) => {
  const { addProduct, updateProduct, getProducts } = storeProduct();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [avatar, setAvatar] = useState("");
  const [thumbnile, setThumbnile] = useState("");

  useEffect(() => {
    if (onEdit) {
      setTitle(onEdit.title);
      setName(onEdit.name);
      setDescription(onEdit.description || "");
      setJob(onEdit.job || "");
      setPrice(onEdit.price || 0);
      setAvatar(onEdit.avatar || "/content/profileMentor/Avatar-1.png");
      setThumbnile(onEdit.thumbnile || "https://picsum.photos/seed/picsum/200/300");
    } else {
      setTitle("");
      setName("");
      setDescription("");
      setJob("");
      setPrice(0);
      setAvatar("/content/profileMentor/Avatar-1.png");
      setThumbnile("https://picsum.photos/seed/picsum/200/300");
    }
  }, [onEdit])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const productData: IProductsSchema = {
      ...(onEdit?.id ? { id: onEdit.id } : {
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      title,
      name,
      description,
      job,
      price,
      avatar,
      thumbnile
    };
    if (onEdit) {
      await updateProduct(productData);
    } else {
      await addProduct(productData);
    }
    await getProducts();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-[90%] sm:w-[400px] shadow-lg">
        <h2 className="text-xl text-white font-bold mb-4">
          {onEdit ? "Edit Konten" : "Tambah Konten"}
        </h2>

        <form onSubmit={handleSubmit} className="flex text-white flex-col gap-4">
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Deskripsi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Posisi"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Harga | Contoh: 300 K"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Profile URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Thumbnail URL"
            value={thumbnile}
            onChange={(e) => setThumbnile(e.target.value)}
            className="border p-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <Button
              className="px-4 py-2 text-white rounded-md"
              variant="btn-secondary"
              type="button"
              onClick={onClose}
            >
              Batal
            </Button>
            <Button
              variant="btn-primary"
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"

            >
              {onEdit ? "Simpan Perubahan" : "Tambah"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;