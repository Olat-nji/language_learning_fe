'use client'

import { useState } from "react";

type TabKey = "profile" | "difficulty" | "quest" | "learning";

interface TabContent {
  number: string;
  description: JSX.Element;
  illustration: string;
}

const tabs: { id: TabKey; label: string }[] = [
  { id: "profile", label: "Profile Setup" },
  { id: "difficulty", label: "Difficulty Selection" },
  { id: "quest", label: "Quest Selection" },
  { id: "learning", label: "Learning Begins" },
];

const tabContent: Record<TabKey, TabContent> = {
  profile: {
    number: "01.",
    description: (
      <>
        <span className="text-transparent-white-65">Begin Your Learning Journey By </span>
        <span className="text-white">Setting Up Your Profile</span>
        <span className="text-transparent-white-65"> And </span>
        <span className="text-white">Picking Languages </span>
        <span className="text-transparent-white-65">You Are Interested In</span>
      </>
    ),
    illustration: "/steptabs/profiletab.png",
  },
  difficulty: {
    number: "02.",
    description: (
      <>
        <span className="text-transparent-white-65">Before You Play, </span>
        <span className="text-white">Set Your Difficulty Level </span>
        <span className="text-transparent-white-65">So You Get </span>
        <span className="text-white">The Best Experience </span>
        <span className="text-transparent-white-65">For You</span>
      </>
    ),
    illustration: "/steptabs/difficultytab.png",
  },
  quest: {
    number: "03.",
    description: (
      <>
        <span className="text-transparent-white-65">Now, You’re Ready To Explore. </span>
        <span className="text-white">Select A Quest</span>
        <span className="text-transparent-white-65"> And </span>
        <span className="text-white">Preview It </span>
        <span className="text-transparent-white-65">To Get A Better Idea.</span>
      </>
    ),
    illustration: "/steptabs/questtab.png",
  },
  learning: {
    number: "04.",
    description: (
      <>
        <span className="text-transparent-white-65">Your Game Awaits. </span>
        <span className="text-white">Read The Game Tips </span>
        <span className="text-transparent-white-65">While You Wait. Remember </span>
        <span className="text-white">Your Timer Starts Soon.</span>
      </>
    ),
    illustration: "/steptabs/learningtab.png",
  },
};

export default function StepTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  
  return (
    <div className="w-full p-4 my-10 md:my-20 ">
      <div className="w-full lg:w-[977px] mx-auto flex md:flex-row flex-col justify-center md:border border-neutral-40 md:h-[65px] rounded-[62px] h-auto bg-white mb-4 md:mb-14 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` py-3 lg::py-[21px] px-[60px] rounded-[61px] text-secondary-60 ${
              activeTab === tab.id ? "bg-neutral-30 border-neutral-10 text-secondary-120 " : "bg-white "
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-black text-white mx-4 md:mx-10 p-4 md:p-20">
        <div className="flex flex-col md:items-center md:flex-row md:gap-[72px] ">
          <div className="md:w-1/2 p-4">
            <img src={tabContent[activeTab].illustration} alt={tabContent[activeTab].number} />
          </div>
          <div className="md:w-1/2 p-4">
            <div className="mb-4 lg:mb-9 border-2 border-white flex justify-center items-center rounded-full w-16 h-16 text-white ">{tabContent[activeTab].number}</div>
            <p className="mb-4 text-2xl lg:text-[40px] leading-[60px] ">{tabContent[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
