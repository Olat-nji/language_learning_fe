"use client";

import ProgressBox from "../Progressbox";

export default function ProgressContainer() {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const progressValues = levels.map(level => (level * 26.9));



  return (
    <div className="flex flex-wrap w-[1334px] mt-1 p-4 gap-4 border  border-red">
      {/* Default ProgressBox */}
      <ProgressBox level={1} progressStarted={false} progress={0} />

      {/* ProgressBoxes for different levels/progresslevels */}
      {levels.map((level, index) => (
        <ProgressBox key={index} level={1} progressStarted={true} progress={progressValues[index]} />
      ))}
    </div>
  );
}
