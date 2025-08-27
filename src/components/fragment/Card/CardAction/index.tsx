import { Fragment, useEffect, useState } from "react";
import { localStorageProduct } from "../../../../utils/localStorageProduct";
import type { IProduct } from "../../../views/AdminElements/ProductManage/Types";

interface CardActionProps {
  product: IProduct
}

const CardAction: React.FC<CardActionProps> = ({ product }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedProducts = localStorageProduct.getStored();
    setProducts(storedProducts);
  }, []);

  return (
    <Fragment>
      {products.length === 0 ? (
        <p className="text-gray-500">Belum ada produk</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center w-[389px] bg-default-white rounded-md shadow-md">
            <div className='p-5'>
              <img
                className='object-cover rounded-md w-[344px] h-[193px]'
                src={product.image || "https://dummyimage.com/600x400/000/fff"}
                alt="video-course"
              />
              <div className="pt-6">
                <h3 className="text-xl font-poppins font-bold">{product.title}</h3>
                <p className="text-sm text-textDark-secondary mt-2">
                  Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum
                </p>
              </div>

              <div className='flex items-center gap-4 py-6'>
                <img
                  className="w-12 h-12 object-cover"
                  src={product.imageProfile || "/content/profileMentor/Avatar-1.png"}
                  alt="profile-mentor"
                />
                <div className="flex flex-col">
                  <strong>{product.name}</strong>
                  <small>{product.job}</small>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="content/rating/Rating.png"
                    alt="rating"
                  />
                  <small>3.5</small>
                  <small>(86)</small>
                </div>
                <h3 className="text-main-primary text-xl font-poppins font-bold">
                  Rp {new Intl.NumberFormat("id-ID").format(product.price)}
                </h3>
              </div>
            </div>
          </div>
        ))
      )
      }
    </Fragment>

  );
}

export default CardAction;