import Image from "next/image";
import { MouseEventHandler } from "react";

import circle from "../../../public/quest learning now/circle.svg";
import CustomButton from "../common/common-button/common-button";

export interface theQuestProperties {
  image: string;
  nameOfQuest: string;
  currentStageOfQuest: string | number;
  noOfPoints: string | number;
  noOfLevels: string | number;
}

interface NextUpOrCompletedQuestLearningNowProperties {
  theQuest: theQuestProperties[];
  isCompleted: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const QuestLearningNow = ({
  theQuest,
  isCompleted,
  onClick,
}: NextUpOrCompletedQuestLearningNowProperties) => {
  return (
    <div className="max-w-[1200px] px-6 py-[1.25rem] sm:px-[3rem]">
      <div className="mb-0 text-start sm:mb-[2.25rem]">
        {isCompleted ? (
          <p className="font-lilita text-[1.5rem] font-normal leading-[150%] text-[rgb(67,91,118)] sm:text-[2.25rem]">
            Completed
          </p>
        ) : (
          <p className="font-lilita text-[1.5rem] font-normal leading-[150%] text-[#435B76] sm:text-[2.25rem]">
            Next Up
          </p>
        )}
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4 sm:gap-8 md:flex-nowrap">
        {theQuest.map((quest, index) => (
          <div
            key={index}
            className="max-w-[23rem] rounded-[0.625rem] border border-solid border-neutral-50"
          >
            <div>
              <Image
                src={quest?.image}
                alt={quest?.nameOfQuest}
                width={368}
                height={432}
              />
            </div>
            <div className="flex flex-col gap-2 px-[1rem] py-[1.5rem] sm:gap-5">
              <h1 className="overflow-hidden text-ellipsis font-inter font-medium leading-[1.625rem] text-[#1B1B1B]">
                {quest?.nameOfQuest}
              </h1>
              <div>
                <div className="flex items-center gap-[0.5rem]">
                  <p className="font-inter text-[0.875rem] font-normal leading-[1.25rem] text-[rgb(67,91,118)]">
                    Stage {quest?.currentStageOfQuest}
                  </p>
                  <Image src={circle} alt="circle" width={8} height={8} />
                  <p className="font-inter text-[0.875rem] font-normal leading-[1.25rem] text-[#435B76]">
                    {quest?.noOfPoints} Points
                  </p>
                  <Image src={circle} alt="circle" width={8} height={8} />

                  <p className="font-inter text-[0.875rem] font-normal leading-[1.25rem] text-[#435B76]">
                    {quest?.noOfLevels} Levels
                  </p>
                </div>
              </div>

              {isCompleted && (
                <div className="h-[0.625rem] w-full rounded-[1.25rem] bg-purple-100"></div>
              )}
              <div>
                <CustomButton
                  onClick={onClick}
                  className="w-full"
                  variant="primary-two"
                >
                  {isCompleted ? "Continue Quest" : "Preview  Quest"}
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestLearningNow;
