"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CustomButton from "../common/common-button/common-button";
import Sidebar from "../sidebar/sideBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logo from "./logo-component";

interface NavbarLinksProperties {
  title: string;
  linkPath: string;
  isActive: boolean;
}

const navbarLinks: NavbarLinksProperties[] = [
  {
    title: "Home",
    isActive: false,
    linkPath: "/",
  },

  {
    title: "Games",
    isActive: false,
    linkPath: "/games",
  },
];

const LightNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in
    const userSignedIn = false;
    setIsSignedIn(userSignedIn);
  }, []);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 w-screen">
        <div className="md:max-w-4/5 lg:max-w-4/5 mx-auto my-4 hidden w-3/5 flex-row items-center rounded-full bg-white p-2.5 pl-5 shadow-md ring-1 ring-gray-200 md:flex md:justify-between md:shadow md:ring-primary-20">
          <Logo />
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navbarLinks.map((links, index) => {
              const { isActive, linkPath, title } = links;

              return (
                <Link
                  key={index}
                  href={linkPath}
                  className={`cursor-pointer font-inter text-sm no-underline outline-none duration-300 ease-in hover:text-neutral-120 ${isActive ? "text-neutral-120" : "text-neutral-80"}`}
                >
                  {title}
                </Link>
              );
            })}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex flex-row items-center gap-1 font-inter text-sm text-neutral-80 no-underline outline-none duration-300 ease-in`}
              >
                <div>About</div>

              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] rounded-xl border border-blue-200 bg-white shadow-sm">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex space-x-6">
          {isSignedIn ? (
            <div className="flex h-full w-full items-center gap-1 rounded-[40px] border-2 border-[#E9EEF3] px-[10px] py-1">
              <Image
                src="/logo/profile.svg"
                alt="profile-icon"
                width={45}
                height={22}
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
              <button className="h-12 w-[132px] rounded-[59px] border border-[#1B1B1B] bg-[#2A2A2A] text-white">
                Sign Up
              </button>
              <button className="h-12 w-[132px] rounded-[59px] border border-[#1B1B1B] bg-white text-[#2A2A2A]">
                Sign In
              </button>
            </>
          )}
        </div>
      </div>

        {/* Mobile Navigation */}
        <div className="mx-auto my-4 flex h-[64px] w-full max-w-[351px] items-center justify-between rounded-[60px] border border-neutral-30 bg-white p-3 shadow-sm md:hidden">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src="/logo/mobile-nav.svg"
                alt="mobile-logo"
                width={32}
                height={32}
                className="block md:hidden"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <div className="h-full w-full rounded-full border-2 border-[#E9EEF3] p-1">
                <Image
                  src="/logo/profile.svg"
                  alt="profile-icon"
                  width={36}
                  height={36}
                />
              </div>
            ) : (
              <>
                <button className="h-10 w-[109px] rounded-[59px] border border-[#E9EEF3] bg-[#2A2A2A] text-white">
                  Sign Up
                </button>
                <button
                  onClick={toggleSidebar}
                  className="flex h-10 w-10 items-center justify-center rounded-[49px] border border-[#C7D3E1] bg-white p-[10px]"
                >
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
      </nav>
      <div
        className={`fixed bottom-0 left-0 top-20 z-50 flex h-screen w-full transform flex-col justify-start border-r bg-[#FDFDFD] md:w-[220px] lg:w-[252px] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isSidebarOpen && <Sidebar />}
      </div>
    </>
  );
};

export default LightNav;
