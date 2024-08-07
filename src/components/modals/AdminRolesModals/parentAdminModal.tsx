"use client";

import Image from "next/image";
import { ReactNode } from "react";

import CloseImage from "../../../../public/adminRoles/close.svg";

interface ContainerModalProperties {
  width: string;
  onClose: () => void;
  children: ReactNode;
}

const ContainerModal = ({
  onClose,
  children,
  width,
}: ContainerModalProperties) => {
  return (
    <div className="">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black opacity-[50%] backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-[50%] backdrop-blur-sm">
        <div
          className={`shadow-4xl relative rounded-[1rem] bg-white px-[1.2rem] py-4 sm:px-[2.25rem] sm:py-8 ${width}`}
        >
          <div className="absolute right-3 top-3">
            <Image
              onClick={onClose}
              src={CloseImage}
              alt="close"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContainerModal;
