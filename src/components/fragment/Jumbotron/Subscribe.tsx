import { LIST_BANNER_2 } from "../../../constant/listBanner"
import EachUtils from "../../../utils/EachUtils"
import Button from "../Button"

const Subscribe = () => {
  return (
    <div className="flex items-center justify-center py-3">
      <EachUtils
        of={LIST_BANNER_2}
        render={(item, index) => (
          <div key={index} className="relative">
            <div>
              <img
                className="sm:w-[1300px] h-[450px] object-cover z-0 rounded-xl brightness-[.3]"
                src={item.image}
                alt="Banner"
              />

              <div className='absolute w-full text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 px-4 sm:px-25'>
                <small>{item.news}</small>
                <h1 className='text-3xl font-poppins font-semibold mb-4 sm:text-5xl'>{item.title}</h1>
                <p className='text-sm font-normal font-dmsans mb-5 sm:text-base'>{item.desc}</p>

                <div className="w-full md:w-1/2 mx-auto flex flex-col md:flex-row items-center justify-center md:bg-white rounded-md py-3 px-4 gap-4">
                  <input
                    className="w-full bg-white text-center md:text-start py-2 px-2 sm:px-6 rounded-md font-semibold sm:text-base focus:outline-main-primary text-black placeholder:text-textDark-secondary"
                    type="text"
                    placeholder="Email"

                  />
                  <Button
                    className='w-full md:w-1/2 text-xs text-white py-3 px-4 sm:px-6 rounded-md font-semibold sm:text-base'
                    variant="btn-secondary"
                    type="button"
                    onClick={() => { window.location.href = "/" }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Subscribe;