import GetStarted from '../../fragment/Jumbotron/GetStarted';
import Subscribe from '../../fragment/Jumbotron/Subscribe';
import ListFilter from '../../fragment/Card/ListFilter';
import { useEffect } from 'react';
import CardAction from '../../fragment/Card/CardAction/index';
import { storeProduct } from '../../../libs/zustand/storeProducts';



const DashboardElements = () => {
  const { getProducts } = storeProduct();

  useEffect(() => {
    getProducts();
  }, [getProducts]);


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
            <CardAction />
          </div>
        </div>

        <div>
          <Subscribe />
        </div>
      </div>
    </section >
  )
}

export default DashboardElements;