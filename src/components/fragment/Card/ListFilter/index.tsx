import { useState } from 'react';
import { LIST_FILTER_1 } from '../../../../constant/listFilter';
import EachUtils from '../../../../utils/EachUtils';

const ListFilter = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ul className="flex gap-8 min-w-max overflow-x-auto scroll-smooth">
      <EachUtils
        of={LIST_FILTER_1}
        render={(item, index) =>
          <li
            className={`cursor-pointer rounded-md text-md font-semibold tracking-wider
              ${active === item.title
                ? 'text-main-tertiary font-bold'
                : 'hover:text-main-tertiary'}
            `}
            key={index}
            onClick={() => setActive(item.title)}
          >
            <div className='flex flex-col gap-2 items-start'>
              {item.title}
              <span
                className={`w-10 h-[5px] rounded-md
                  ${active === item.title
                    ? 'bg-main-tertiary border-main-tertiary'
                    : ''}
                `}
              ></span>
            </div>
          </li>
        }
      />
    </ul>
  )
}

export default ListFilter;