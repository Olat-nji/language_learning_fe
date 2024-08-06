"use client";

import { Mic } from "lucide-react";

import LevelDisplay from "~/components/level-display/LevelDisplay";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import QuestLoading from "~/components/quest-loading/quest-loading";

export default function QuestLoadingScreen() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        backgroundImage: "url('/models/Level 12.png')",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="flex w-full flex-col justify-between gap-2 px-[2%] pt-5 lg:flex-row">
        <LevelDisplay />
        <QuestLevelTimer initialTime={300} />
      </div>

      <div className="relative h-full w-full">
        <div className="absolute bottom-0 left-1/2 mb-3 cursor-pointer rounded-full border-white bg-secondary-80 p-6 hover:bg-secondary-50">
          <Mic size={30} aria-label="mic icon" className="text-white" />
        </div>
      </div>
      <QuestLoading
        tips={[
          "Pro tip: Complete quest before the time runs out...",
          "Pro tip: Read the instructions carefully...",
          "Pro tip: Ensure you complete the task...",
          "Pro tip: Hit the microphone button to listen again...",
        ]}
      />
    </div>
  );
}
