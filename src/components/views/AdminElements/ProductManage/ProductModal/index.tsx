import { useEffect, useState } from "react";
import type { IProduct } from "../Types";
import Button from "../../../../fragment/Button";

interface ProductModalPageProps {
  product: IProduct | null
  onClose: () => void
  onSave: (product: IProduct) => void
}

const ProductModal: React.FC<ProductModalPageProps> = ({ product, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [imageProfile, setImageProfile] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setName(product.name);
      setJob(product.job);
      setPrice(product.price);
      setImageProfile(product.imageProfile || "/content/profileMentor/Avatar-1.png");
      setImage(product.image || "https://dummyimage.com/600x400/000/fff");
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: IProduct = {
      id: product ? product.id : Date.now().toString(),
      title,
      name,
      job,
      price,
      imageProfile,
      image,
    };

    onSave(newProduct);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-[90%] sm:w-[400px] shadow-lg">
        <h2 className="text-xl text-white font-bold mb-4">
          {product ? "Edit Konten" : "Tambah Konten"}
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
            value={imageProfile}
            onChange={(e) => setImageProfile(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Thumnile URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
              Tambah
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;