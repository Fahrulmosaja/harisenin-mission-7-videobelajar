import { LIST_BANNER_1 } from "../../../constant/listBanner";
import EachUtils from "../../../utils/EachUtils";
import Button from "../Button";

const GetStarted = () => {
  return (
    <div className="flex items-center justify-center py-3">
      <EachUtils
        of={LIST_BANNER_1}
        render={(item, index) => (
          <div key={index} className="relative">
            <div>
              <img
                className="sm:w-[1300px] h-[450px] object-cover z-0 rounded-xl brightness-[.3]"
                src={item.image}
                alt="Banner"
              />

              <div className='absolute w-full text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 px-4 sm:px-25'>
                <h1 className='text-3xl font-poppins font-semibold mb-4 sm:text-5xl'>{item.title}</h1>
                <p className='text-sm font-normal font-dmsans mb-5 sm:text-base'>{item.desc}</p>
                <Button
                  className='text-xs text-white py-3 px-4 sm:px-6 rounded-md font-semibold sm:text-base'
                  variant="btn-primary"
                  type="button"
                  onClick={() => { window.location.href = "/" }}
                >
                  Temukan Video Course untuk Dipelajari!
                </Button>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default GetStarted;