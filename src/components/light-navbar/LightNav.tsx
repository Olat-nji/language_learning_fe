"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-screen">
      <div className="mx-auto my-4 hidden max-w-[350px] flex-row items-center rounded-full bg-white p-2.5 pl-5 shadow-md ring-1 ring-gray-200 md:flex md:max-w-xl md:justify-between md:shadow md:ring-primary-20 lg:max-w-3xl">
        <Logo />

        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {navbarLinks.map((links, index) => {
            const { isActive, linkPath, title } = links;

            return (
              <Link
                key={index}
                href={linkPath}
                className={`font-inter text-sm no-underline outline-none duration-300 ease-in hover:text-neutral-120 ${isActive ? "text-neutral-120" : "text-neutral-80"}`}
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
        <div className="flex space-x-2">
          {isSignedIn ? (
            <div className="flex h-full w-full items-center gap-1 rounded-[40px] border-2 border-[#E9EEF3] p-1">
              <Image
                src="/logo/profile.svg"
                alt="profile-icon"
                width={35}
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
              <button className="rounded-[59px] border border-[#1B1B1B] bg-[#2A2A2A] px-8 py-3 text-sm text-white">
                Sign Up
              </button>
              <button className="rounded-[59px] border border-[#1B1B1B] bg-white px-8 py-3 text-sm text-[#2A2A2A]">
                Sign In
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mx-auto my-4 flex h-[64px] w-full max-w-[351px] items-center justify-between rounded-[60px] border border-neutral-30 p-3 shadow-sm md:hidden">
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
    </nav>
  );
};

export default LightNav;
