import React from "react";

const QuestWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl rounded-2xl bg-white p-10 shadow-md">
        <h1 className="font-lilita text-center text-4xl uppercase leading-[50px]">
          quests
        </h1>
        <div className="font-inter text-center text-sm font-normal leading-6 text-secondary-90">
          Learn languages by exploring different scenarios.
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </>
  );
};

export default QuestWraper;
