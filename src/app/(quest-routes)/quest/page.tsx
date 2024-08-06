"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import LevelDisplay from "~/components/level-display/LevelDisplay";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import ExampleComponent from "~/components/thoughts/PlayerThought";

const Avatars = dynamic(() => import("~/components/Avatars"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/models/Level 12.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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

      {mounted && (
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 pb-10 pl-[2%]">
            <ExampleComponent />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-[30%] transform pb-5">
            <Avatars />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
