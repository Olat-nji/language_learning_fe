"use client";

import { Dispatch, SetStateAction } from "react";

import { QuestTabDropdown } from "./quest-tab-dropdown";
import QuestTabSwitcher from "./quest-tab-switcher";

type tabProperties = {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export const QuestTabHeader: React.FC<tabProperties> = ({ tab, setTab }) => {
  return (
    <div className="flex flex-col justify-between gap-[20px] sm:items-start md:flex-col md:items-start lg:flex-row lg:items-center">
      <div className="flex flex-col">
        <h1 className="text-[20px] font-bold text-black">Quests</h1>
        <p className="text-[16px] text-black">
          Pick a quest, Delve In, Learn new words and save the day.
        </p>
      </div>
      <div className="flex flex-row items-center gap-[20px]">
        <QuestTabSwitcher tab={tab} setTab={setTab} />
        <QuestTabDropdown />
      </div>
    </div>
  );
};
