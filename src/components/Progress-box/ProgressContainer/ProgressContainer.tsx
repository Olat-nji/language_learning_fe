"use client";

import ProgressBox from "../Progressbox";

export default function ProgressContainer() {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const progressValues = levels.map((level) => level * 26.9);

  return (
    <div className="border-red mt-1 flex w-[1334px] flex-wrap gap-4 border p-4">
      {/* Default ProgressBox */}
      <ProgressBox level={1} progressStarted={false} progress={0} />

      {/* ProgressBoxes for different levels/progresslevels */}
      {levels.map((level, index) => (
        <ProgressBox
          key={index}
          level={1}
          progressStarted={true}
          progress={progressValues[index]}
        />
      ))}
    </div>
  );
}
