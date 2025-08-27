import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import EachUtils from '../../../utils/EachUtils';
import { LIST_FOOTER_2 } from '../../../constant/listFooter';
import Button from '../../fragment/Button';



interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(Boolean);

  return (
    <div className="w-full cursor-pointer sm:text-start">
      <Button
        variant="default"
        className="sm:cursor-default hover:bg-main-tertiary/80 hover:text-white sm:hover:bg-transparent sm:hover:text-textDark-primary cursor-pointer w-full flex sm:p-0 py-2 rounded-md justify-between items-center sm:block font-semibold mb-2 sm:text-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="sm:hidden">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </Button>

      <div className={`sm:block ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

const FooterList = () => {
  return (
    <EachUtils
      of={LIST_FOOTER_2}
      render={(item, index) => (
        <div key={index} className='w-full flex flex-col md:flex-row gap-4 sm:mt-0'>
          <FooterSection
            title={item.title}
          >
            <ul>
              <li className='flex flex-col gap-2'>
                {Array.isArray(item.list) && item.list.map((listItem: string, id: number) => (
                  <p
                    key={id}
                    className='px-4 mb-2 sm:mb-0 sm:px-0 text-sm font-normal font-dmsans'
                  >
                    {listItem}
                  </p>
                ))}
              </li>
            </ul>
          </FooterSection>
        </div>
      )}
    />
  )
}

export default FooterList;