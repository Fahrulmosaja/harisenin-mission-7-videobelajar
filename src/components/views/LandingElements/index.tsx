import GetStarted from '../../fragment/Jumbotron/GetStarted';
import Subscribe from '../../fragment/Jumbotron/Subscribe';
import ListFilter from '../../fragment/Card/ListFilter';
import CardAction from '../../fragment/Card/CardAction';
import { useEffect, useState } from 'react';
import type { IProduct } from '../AdminElements/ProductManage/Types';
import { localStorageProduct } from '../../../utils/localStorageProduct';

const LandingElements = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedProducts = localStorageProduct.getStored();
    setProducts(storedProducts);
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto mt-20">
      <GetStarted />
      <div className="py-6 w-full">
        <div className="">
          <h1 className="text-3xl font-bold font-poppins text-textDark-primary">Koleksi Video Pembelajaran Unggulan</h1>
          <p>Jelajai Dunia Pengetauan Melalui Pilihan Kami!</p>
        </div>

        <div className="pt-6 w-full overflow-x-auto">
          <ListFilter />
        </div>

        <div className="py-6 w-full">
          <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardAction product={products[0]} />
          </div>
        </div>

        <div>
          <Subscribe />
        </div>
      </div>
    </section>
  )
}

export default LandingElements;