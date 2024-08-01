"use client";

import Image from "next/image";
import { useState } from "react";
import VolumeBar from "../miscellaneous/Volume";

interface ProgressBoxProps {
  level: number;
  progressStarted: boolean;
  progress: number;
}


export default function ProgressBox({ level, progressStarted, progress }: ProgressBoxProps) {

  return (
    <div className="mt-4 flex h-[127px] w-[417px] flex-col items-center rounded-l-[86px] rounded-r-[40px] border-[10px] border-primary-100 bg-primary-60 ">
      <div className="flex w-full items-center py-2 px-2 gap-4">
        <Image
          src="/logo/profile.svg"
          alt="profile icon"
          width={84}
          height={84}
          className="mr-2"
        />
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold leading-9 text-primary-130">
          The Burning building
          </p>
          {progressStarted && (
            <>
            <div className="flex flex-col gap-1">
              <p className="text-base text-transparent-black-60 font-bold ">Lvl {level}</p>
              <VolumeBar value={progress}  />
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
