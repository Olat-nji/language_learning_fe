import Image from "next/image";
import Link from "next/link";

import { QuestPreviewCardDataProperties } from "./data/DummyData";

const QuestPreviewCard = ({
  id,
  cardImage,
  level,
  points,
  stage,
  title,
}: QuestPreviewCardDataProperties) => {
  return (
    <>
      <div className="overflow-hidden rounded-[8px] ring-1 ring-gray-200">
        <div className="h-64 w-full overflow-hidden rounded-t-md bg-gray-100">
          <Image
            src={cardImage}
            className="h-full w-full object-cover"
            height={100}
            width={100}
            alt={title}
          />
        </div>

        <div className="p-3">
          <h4 className="font-inter text-base font-semibold capitalize text-secondary-120">
            {title}
          </h4>

          <div className="flex flex-row items-center gap-2 font-inter">
            <div className="text-xs capitalize text-gray-400">
              Stage {stage}
            </div>
            <div className="h-[5.5px] w-[5px] rounded-full ring-1 ring-purple-30"></div>
            <div className="text-center text-xs capitalize text-gray-400">
              {points} Points
            </div>
            <div className="h-[5.5px] w-[5px] rounded-full ring-1 ring-purple-30"></div>
            <div className="text-xs capitalize text-gray-400">
              {level} Levels
            </div>
          </div>
          <div className="mt-2">
            <Link
              href={`/quest/game/${id}`}
              className="no-underline outline-none"
            >
              <div className="w-full rounded-full bg-primary-10 px-4 py-2 text-center font-inter text-sm font-semibold capitalize text-primary-100 ring-1 ring-transparent duration-300 ease-in hover:ring-primary-100">
                Preview Quest
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestPreviewCard;
