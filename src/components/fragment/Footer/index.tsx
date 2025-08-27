import { LIST_FOOTER_1 } from "../../../constant/listFooter";
import EachUtils from "../../../utils/EachUtils";
import ListFooter from "./ListFooter";

const Footer = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-8">

      <div className="w-full flex flex-wrap justify-between px-2 md:px-0">
        <div className="w-full md:w-1/4 bg-white flex flex-col gap-4">
          <img
            className="w-[193px]"
            src="/logo/LogoVideoBelajar.png"
            alt="logo-video-belajar"
          />

          <EachUtils
            of={LIST_FOOTER_1}
            render={(item, index) =>
              <div
                key={index}
                className="flex flex-col gap-2">
                <strong>
                  {item.title}
                </strong>
                <small>
                  {item.address}
                </small>
                <small>
                  {item.phone}
                </small>
              </div>
            }
          />
        </div>
        <div className="w-full md:w-1/2 md:flex pt-6">
          <ListFooter />
        </div>
      </div>

      <div className="pt-8 px-2">
        <p className="text-sm">
          Copyright © 2023 Video Belajar. All rights reserved.
        </p>
      </div>

    </section>
  );
};

export default Footer;