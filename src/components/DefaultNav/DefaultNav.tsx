"use client";

import Image from "next/image";

const DefaultNav = () => {
  return (
    <nav className="z-50 h-16 px-3 text-black md:h-[100px] md:p-0">
      <div className="shadow mx-auto mt-14 flex max-w-[1728px] items-center justify-between border-b border-b-neutral-40 bg-white px-5 py-4 md:mt-9">
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-center">
            <Image
              src="/logo/lightnav-logo.svg"
              alt="desktop-logo"
              width={138}
              height={32}
              className="hidden md:block"
            />
          </div>

          <div className="flex space-x-8">
            <Image
              src="/logo/search.svg"
              alt="search-icon"
              width={40}
              height={40}
            />

            <div className="flex items-center border-l border-neutral-40"></div>

            <Image
              src="/logo/bell.svg"
              alt="notification-icon"
              width={36}
              height={36}
            />

            <div className="flex items-center border-l border-neutral-40"></div>

            <div className="flex h-full w-full items-center gap-1 rounded-[40px] border-2 border-[#E9EEF3] px-[10px] py-1">
              <Image
                src="/logo/profile.svg"
                alt="profile-icon"
                width={40}
                height={40}
              />
              <Image
                src="/logo/about-down.svg"
                alt="profile-arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="flex items-center">
            <Image
              src="/logo/mobile-nav.svg"
              alt="mobile-logo"
              width={32}
              height={32}
              className="block md:hidden"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/logo/profile.svg"
              alt="profile-icon"
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DefaultNav;
