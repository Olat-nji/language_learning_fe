"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DarkNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  useEffect(() => {
    // Check if the user is signed in
    const userSignedIn = true;
    setIsSignedIn(userSignedIn);
  }, []);

  return (
    <nav className="z-50 h-16 px-3 text-black md:h-20 md:p-0">
      <div className="mx-auto mt-14 flex max-w-[1136px] items-center justify-between rounded-[60px] border border-[#DEE5ED] border-transparent-white-15 bg-transparent-black-55 px-5 py-4 shadow md:mt-9">
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-center">
            <Image
              src="/logo/darknavlogo.svg"
              alt="desktop-logo"
              width={138}
              height={32}
              className="hidden md:block"
            />
          </div>
          <div className="flex space-x-[56px] text-base font-normal text-transparent-white-70">
            <Link href="/">Home</Link>
            <Link href="/">Games</Link>
            <Link href="/">About</Link>
          </div>
          <div className="flex space-x-6">
            {isSignedIn ? (
              <div className="flex h-full w-full items-center gap-1 rounded-[40px] border-2 border-transparent-white-15 bg-transparent-black-25 px-[10px] py-1">
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
            ) : (
              <>
                <button className="h-12 w-[132px] rounded-[59px] border border-primary-120 bg-primary-100 text-white">
                  Sign Up
                </button>
                <button className="h-12 w-[132px] rounded-[59px] border border-neutral-40 bg-white text-secondary-110">
                  Sign In
                </button>
              </>
            )}
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
            {isSignedIn ? (
              <div className="h-full w-full rounded-full border-2 border-transparent-black-10 p-[2px]">
                <Image
                  src="/logo/profile.svg"
                  alt="profile-icon"
                  width={38}
                  height={38}
                />
              </div>
            ) : (
              <>
                <button className="h-10 w-[109px] rounded-[59px] border border-primary-120 bg-primary-100 text-white">
                  Sign Up
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-[49px] border border-[#C7D3E1] bg-white p-[10px]">
                  <Image
                    src="/logo/mobile-3lines.svg"
                    alt="menu-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DarkNav;
