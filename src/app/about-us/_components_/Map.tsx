import Image from "next/image";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

import map from "../../../../public/images/aboutAsset/Map.jpg";

const Map = () => {
  return (
    <div className="map hidden rounded-[16px] rounded-b-none lg:flex">
      <Image src={map} alt="map" className="h-full w-[92%] object-cover" />
      <div className="flex h-[180px] w-[8%] flex-col items-center justify-center gap-[40px] self-end rounded-br-[24px] rounded-tr-[8px] bg-primary-100 px-[12px] py-[8px]">
        <FiFacebook size={20} color="white" />
        <FiLinkedin size={20} color="white" />
        <IoLogoInstagram size={20} color="white" />
      </div>
    </div>
  );
};
export default Map;
