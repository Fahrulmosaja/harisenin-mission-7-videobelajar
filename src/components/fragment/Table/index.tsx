import { storeProduct } from "../../../libs/zustand/storeProducts";
import type { IProductsSchema } from "../../../types/ProductsCourseType";
import Button from "../Button";

interface TableAdminProps {
  onDelete: (product: any) => void
  onEdit: (product: IProductsSchema) => void
}

const TableAdmin: React.FC<TableAdminProps> = ({ onEdit, onDelete }) => {
  const { products } = storeProduct();

  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-[#21222D] my-8 text-white">
        <thead>
          <tr className="font-bold text-sm">
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Gambar</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Judul</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Edit & Hapus</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              className="text-[12px]"
              key={product.id}
            >
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">
                <img
                  className="w-8 h-8 rounded-md"
                  src={product.avatar}
                  alt={product.name}
                />
              </td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.title}</td>
              <td className="py-2 px-4 border-b overflow-x-auto">{product.description}</td>
              <td className="py-2 px-4 border-b w-[200px] text-center">Rp. {new Intl.NumberFormat("id-ID").format(product.price)}</td>

              <td className="py-2 px-4 border-b">
                <div className="flex gap-2">
                  <Button
                    className="py-1 px-2 text-sm text-white bg-main-primary rounded-md cursor-pointer"
                    variant="default"
                    onClick={() => onEdit(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="py-1 px-2 text-sm text-white bg-red-600 rounded-md cursor-pointer"
                    onClick={() => onDelete(product)}
                    variant="default"
                  >
                    Hapus
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdmin;
