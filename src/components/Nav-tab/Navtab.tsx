"use client";

import { useState } from "react";
import clsx from "clsx";

export default function NavTabs() {
  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <div className="m-[50px] h-[50px] bg-neutral-30 border border-neutral-40 rounded-[10px] ">
    <div className="flex gap-1 p-[1px] h-full">
        <button
          onClick={() => setSelectedTab("profile")}
          className={clsx(
            "flex-1 py-2 px-4 text-sm rounded-l-[10px] font-normal text-secondary-110 transition-colors",
            "focus:outline-none",
            { "bg-secondary-110 text-white border-l-4 border-black ": selectedTab === "profile" }
          )}
        >
          Profile
        </button>
        <button
          onClick={() => setSelectedTab("language")}
          className={clsx(
            "flex-1 py-2 px-4 text-sm  font-normal text-secondary-110 border-r-2 transition-colors",
            "focus:outline-none",
            { "bg-secondary-110 text-white border-l-4 border-black": selectedTab === "language" }
          )}
        >
          Language
        </button>
        <button
          onClick={() => setSelectedTab("notifications")}
          className={clsx(
            "flex-1 py-2 px-4 text-sm font-normal text-secondary-110 border-r-2 transition-colors",
            "focus:outline-none",
            { "bg-secondary-110 text-white border-l-4 border-black": selectedTab === "notifications" }
          )}
        >
          Notifications
        </button>
        <button
          onClick={() => setSelectedTab("invitelink")}
          className={clsx(
            "flex-1 py-2 px-4 text-sm  font-normal text-secondary-110 border-r-2 transition-colors",
            "focus:outline-none text-nowrap ",
            { "bg-secondary-110 text-white text-nowrap border-l-4 border-black": selectedTab === "invitelink" }
          )}
        >
          Invite Link
        </button>
        <button
          onClick={() => setSelectedTab("security")}
          className={clsx(
            "flex-1 py-2 px-4 text-sm rounded-r-[10px] font-normal text-secondary-110  transition-colors",
            "focus:outline-none",
            { "bg-secondary-110 text-white ": selectedTab === "security" }
          )}
        >
          Security
        </button>
    </div>
    </div>
  );
}
