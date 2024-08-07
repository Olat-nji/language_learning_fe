'use client'

import { useState } from "react";

type TabKey = "profile" | "difficulty" | "quest" | "learning";

interface TabContent {
  number: string;
  description: string;
  illustration: string;
}

// Define the tabs with their labels
const tabs: { id: TabKey; label: string }[] = [
  { id: "profile", label: "Profile Setup" },
  { id: "difficulty", label: "Difficulty Selection" },
  { id: "quest", label: "Quest Selection" },
  { id: "learning", label: "Learning Begins" },
];

// Define the content for each tab
const tabContent: Record<TabKey, TabContent> = {
  profile: {
    number: "01.",
    description: "Begin Your Learning Journey By Setting Up Your Profile And Picking Languages You Are Interested In",
    illustration: "/steptabs/profiletab.png",
  },
  difficulty: {
    number: "02.",
    description: "Before You Play, Set Your Difficulty Level So You Get The Best Experience For You",
    illustration: "/steptabs/difficultytab.png",
  },
  quest: {
    number: "03.",
    description: "Now, You’re Ready To Explore. Select A Quest And Preview It To Get A Better Idea.",
    illustration: "/steptabs/questtab.png",
  },
  learning: {
    number: "04.",
    description: "Your Game Awaits. Read The Game Tips While You Wait. Remember Your Timer Starts Soon.",
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
        <div className="flex flex-col md:items-center md:flex-row">
          <div className="md:w-1/2 p-4">
            <img src={tabContent[activeTab].illustration} alt={tabContent[activeTab].number} />
          </div>
          <div className="md:w-1/2 p-4">
            <div className="mb-4 lg:mb-9 border-2 border-white flex justify-center items-center rounded-full w-16 h-16 text-white ">{tabContent[activeTab].number}</div>
            <p className="mb-4 text-[40px] ">{tabContent[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
