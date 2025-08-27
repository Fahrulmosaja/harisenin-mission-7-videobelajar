import type React from 'react';

import type { IProduct } from '../../../views/AdminElements/ProductManage/Types';
import Button from '../../Button';

interface CardProps {
  product: IProduct
  onEdit: (product: IProduct) => void
  onDelete: (product: IProduct) => void
}

const CardAdmin: React.FC<CardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className='mx-auto flex justify-beetween items-start flex-wrap gap-4'>
      <div className='mx-auto flex flex-col items-center w-[389px] bg-default-white rounded-md shadow-md'>
        <div className='p-5'>
          <img
            className="object-cover rounded-md w-[344px] h-[193px]"
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

          <div className="flex justify-end gap-2 mt-4 py-2">
            <Button
              className="px-3 py-1 text-sm"
              variant='btn-primary'
              type="button"
              onClick={() => onEdit(product)}
            >
              Edit
            </Button>
            <Button
              className="px-3 py-2 text-sm bg-red-800 rounded-md text-white font-bold cursor-pointer"
              variant='default'
              type="button"
              onClick={() => onDelete(product)}
            >
              Hapus
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardAdmin;