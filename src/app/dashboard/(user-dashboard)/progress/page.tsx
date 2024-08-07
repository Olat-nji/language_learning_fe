import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import DarkNav from "~/components/DarkNav/DarkNav";
import LoggedInFooter from "~/components/footer/LoggedInFooter";

//This is a method that creates an appropriate string from a score provided to it
const createScoreString = (score: number) => {
  //The method checks if the score is zero and returns - if so otherwise, it returs the score with %
  //example score = 8 returns 8%, score = 0 returns -
  const scoreString = score === 0 ? "-" : score + "%";
  return scoreString;
};

const Progress = () => {
  // This is an array of days containing the name initials, the day shorts and the number of the day in the week
  // This is used to come up with the number of days in the streak signal area.
  const days: { num: number; initial: string; short: string }[] = [
    { num: 1, initial: "M", short: "Mon" },
    { num: 2, initial: "T", short: "Tue" },
    { num: 3, initial: "W", short: "Wed" },
    { num: 4, initial: "T", short: "Thu" },
    { num: 5, initial: "F", short: "Fri" },
    { num: 6, initial: "S", short: "Sat" },
    { num: 7, initial: "S", short: "Sun" },
  ];

  // The following is an array containing several objects associated with the categories in the progress page
  const categories: {
    id: number;
    imageURL: string;
    categoryName: string;
    maxWords: number;
    learntWords: number;
  }[] = [
    {
      id: 1,
      imageURL: "/progress-images/jungle-survival.png",
      categoryName: "Jungle Suvival",
      maxWords: 24,
      learntWords: 18,
    },
    {
      id: 2,
      imageURL: "/progress-images/save-the-cyclist.png",
      categoryName: "Save the Cyclist",
      maxWords: 24,
      learntWords: 12,
    },
    {
      id: 3,
      imageURL: "/progress-images/the-burning-building.png",
      categoryName: "The Burning building",
      maxWords: 18,
      learntWords: 18,
    },
    {
      id: 4,
      imageURL: "/progress-images/catch-the-flight.png",
      categoryName: "Catch The Flight",
      maxWords: 24,
      learntWords: 10,
    },
  ];

  // This is an array that holds the number of days that the user has taken a lesson
  // This is to be populated from the backend
  const activeDays = new Set(["Mon", "Wed", "Fri", "Sat"]);

  //This is the pronunciation score which we can populate from the backend
  const pronunciationScore: number = 100;

  //This is the vowel accuracy score that we can populate from the BE
  const vowelAccuracy: number = 4;

  //This is the consonant accuracy score that we can populate from the BE
  const consonantAccuracy: number = 8;

  //This is the Rising Intonation score that we can populate from the BE
  const risingIntonationScore: number = 10;

  //This is the Falling Intonation score that we can populate from the BE
  const fallingIntonationScore: number = 20;

  //This is the total number of words learnt
  const totalWords: number = 350;

  //This is the basic vocubulary score that we can populate from the BE
  const basicVocubulary: number = 60;

  //This is the intermediate vocubulary score that we can populate from the BE
  const intermediateVocubularyScore: number = 70;

  //This is the advanced vocubulary score that we can populate from the BE
  const advancedVocubularyScore: number = 40;

  // In the streaks indicator, we have the fire container with a border if it's an active streak and none otherwise
  // The following therefore hold the classes to be used to represent the same
  //The size variable is used to make the classes shorter to avoid problems with lint.
  const size = "w-[25.43px] h-[25.43px]";
  const active = "flex items-center justify-center " + size;
  const inactive = "rounded-full border-[1.59px] border-[#C7D3E1] " + size;

  return (
    <div className="w-full">
      {/* This is the container to the progress page and this is where the user progress is displayed */}
      <div className="flex w-full items-center justify-center bg-[#F9FAFA] px-[20px] sm:px-[40px] lg:px-[80px] py-[65px]">
        <div className="flex min-h-[1586px] h-full w-full flex-col gap-[48px]">
          {/* This is the container to the progress summary */}
          <div className="flex flex-col gap-[24px] p-0 xl:p-[65px]">
            <div className="font-axiforma text-[24px] font-bold">
              Game Statistics
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[24px]">
              <div className="border flex flex-col gap-[28px] rounded-[16px] bg-[#FFEDCC] p-[24px]">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Total Streak
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-white-40">
                    <Image
                      alt="fire"
                      src="/progress-images/fire.png"
                      width={25}
                      height={25}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-80">
                    0 Streak
                  </div>
                  <div className="w-full font-axiforma text-[14px] font-normal">
                    Keep your streak alive by completing at least one lesson
                    every day.
                  </div>
                  <div className="flex flex-row justify-between">
                    {days.map((day) => (
                      /* This is the day and streak signal container */
                      <div key={day.num} className="flex flex-col gap-[8px]">
                        {/* This is the day container */}
                        <div className="text-center">{day.initial}</div>
                        {/* 
                          This is the container that holds a signal of the streak
                          If the user participated in at least one lesson, the fire image is shown
                          else no image is shown
                        */}
                        <div
                          className={
                            activeDays.has(day.short) ? active : inactive
                          }
                        >
                          {activeDays.has(day.short) && (
                            <Image
                              alt="fire"
                              src="/progress-images/fire.png"
                              width={25}
                              height={25}
                              style={{ height: "auto" }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border flex flex-col gap-[28px] rounded-[16px] border-neutral-50 bg-[#DEE5ED] p-[24px]">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Pronunciation Accuracy
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-white-40">
                    <Image
                      alt="fire"
                      src="/progress-images/fire-blue.png"
                      width={25}
                      height={25}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    {createScoreString(pronunciationScore)}
                  </div>
                  <div className="flex flex-col gap-[48px]">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Vowel Accuracy: {createScoreString(vowelAccuracy)}
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Consonant Accuracy:{" "}
                          {createScoreString(consonantAccuracy)}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Rising Intonation:{" "}
                          {createScoreString(risingIntonationScore)}
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-[10px]">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                        <div className="font-axiforma text-[14px]">
                          Falling Intonation:{" "}
                          {createScoreString(fallingIntonationScore)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border flex flex-col gap-[28px] rounded-[16px] bg-[#DCDD8F] p-[24px]">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Words Learnt
                  </div>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-white-40">
                    <Image
                      alt="fire"
                      src="/progress-images/languages.png"
                      width={25}
                      height={25}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <div className="font-axiforma text-[18px] font-medium text-secondary-120">
                    Total Words Learned: {totalWords}
                  </div>
                  <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                      <div className="font-axiforma text-[14px]">
                        Basic Vocabulary: {`${basicVocubulary} Words`}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                      <div className="font-axiforma text-[14px]">
                        Intermediate Vocabulary:{" "}
                        {`${intermediateVocubularyScore} Words`}
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-[10px]">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FFBD99]"></div>
                      <div className="font-axiforma text-[14px]">
                        Advanced Vocabulary:{" "}
                        {`${advancedVocubularyScore} Words`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[28px]">
            <div className="font-axiforma text-[24px] font-bold">
              Words Learnt
            </div>
            <div className="grid w-full md:grid-cols-2 gap-[3%]">
              {categories.map(
                (category: {
                  id: number;
                  imageURL: string;
                  categoryName: string;
                  maxWords: number;
                  learntWords: number;
                }) => (
                  <div key={category.id} className="flex flex-col gap-[48px]">
                    <div>
                      <Image
                        alt={category.categoryName}
                        src={category.imageURL}
                        width={764}
                        height={560}
                        className="w-full"
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="flex flex-col gap-[24px] rounded-[18px] border-[1px] border-solid border-[#CBD5E1] bg-white px-[16px] py-[24px]">
                      <div className="font-axiforma text-[20px] font-medium text-[#414141]">
                        {category.categoryName}
                      </div>
                      <div>
                        <div className="h-[10px] w-[100%] rounded-[20px] bg-transparent-black-5">
                          <div
                            className="h-full rounded-full bg-primary-110 p-[5px]"
                            style={{
                              width: `${(category.learntWords * 100) / category.maxWords}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                        <div className="font-axiforma text-[20px] font-medium">
                          {category.learntWords}/
                          <span className="text-[#888888]">
                            {category.maxWords}
                          </span>{" "}
                          Words Learnt
                        </div>
                        <div>
                          <CustomButton variant="primary">View</CustomButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
