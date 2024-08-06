"use client";

import Image from "next/image";

import styles from "./AdminNav.module.css";
import Logo from "./logo-component";

const AdminNav = () => {
  return (
    <nav className="z-50 w-full max-w-[1728px] h-12 text-black md:h-[100px] md:p-0">
      <div
        className={`shadow mx-auto flex  items-center justify-between border-b border-b-neutral-40 bg-white px-5 ${styles.navLinkGradient}`}
      >
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between py-4 md:flex">
          <div className="flex items-center">
            <Logo />
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

            <div className="flex h-11 w-full items-center gap-1 rounded-[40px] border-2 border-[#E9EEF3] px-[10px] py-2">
              <Image
                src="/navbar/profile-standin.svg"
                alt="profile-icon"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-secondary-120">
                  John Doe
                </p>
                <p className="text-sm font-normal text-secondary-70">
                  Super Admin
                </p>
              </div>
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
        <div className="flex w-full items-center justify-between py-1 md:hidden">
          <div className="flex items-center">
            <Image
              src="/navbar/Delve-black_mobile.svg"
              alt="mobile-logo"
              width={48}
              height={48}
              className="block md:hidden"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/navbar/profile-standin.svg"
              alt="profile-icon"
              width={48}
              height={48}
              className="rounded-full"
            />
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-40 bg-white p-[10px]">
              <Image
                src="/navbar/Mobile-3lines.svg"
                alt="menu-icon"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
