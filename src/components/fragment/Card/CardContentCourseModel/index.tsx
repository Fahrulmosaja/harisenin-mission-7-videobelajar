import { LIST_CONTENT } from '../../../../constant/listContent';
import EachUtils from '../../../../utils/EachUtils';

const CardContentCourse = () => {
  return (
    <div className='flex justify-beetween items-start flex-wrap gap-4'>
      <EachUtils
        of={LIST_CONTENT}
        render={(item, index) =>
          <div className='flex flex-col items-center w-[389px] bg-default-white rounded-md shadow-md'
            key={index}
          >
            <div className='p-5'>
              <img
                className='w-full rounded-md'
                src={item.image}
                alt="video-course"
              />
              <div className="pt-6">
                <h3 className="text-xl font-poppins font-bold">{item.title}</h3>
                <p className="text-sm text-textDark-secondary mt-2">{item.desc}</p>
              </div>

              <div className='flex items-center gap-4 py-6'>
                <img
                  className="w-12 h-12 object-cover"
                  src={item.imageProfile}
                  alt="profile-mentor"
                />
                <div className="flex flex-col">
                  <strong>{item.name}</strong>
                  <small>{item.job}</small>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={item.imageRating}
                    alt="rating"
                  />
                  <small>{item.rating}</small>
                  <small>{item.reviewCount}</small>
                </div>
                <h3 className="text-main-primary text-xl font-poppins font-bold">{item.price}</h3>
              </div>

            </div>
          </div>
        }
      />
    </div>
  )
}

export default CardContentCourse;