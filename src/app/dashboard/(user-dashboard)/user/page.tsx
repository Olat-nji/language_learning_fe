"use client";

import { useEffect, useState } from "react";

import { Tabs, TabsContent } from "~/components/ui/tabs";
import DifficultySelect from "./components/DifficultySelect";
import LoadingQuestCard from "./components/LoadingQuestCard";
import QuestCard from "./components/QuestCard";
import TabsMenu from "./components/TabsMenu";
import WelcomeBanner from "./components/WelcomeBanner";
import { questsDummyData, QuestsDummyDataProperties } from "./data/dummyData";

export interface TabMenuProperties {
  id: number;
  value: string;
  title: string;
}

const tabMenuData: TabMenuProperties[] = [
  {
    id: 1,
    value: "allQuests",
    title: "All",
  },

  {
    id: 2,
    value: "inProgress",
    title: "In Progress",
  },

  {
    id: 3,
    value: "completed",
    title: "Completed",
  },
];

const UserDashboard = () => {
  const [questData, setQuestData] = useState<
    QuestsDummyDataProperties[] | undefined
  >();

  // GET dummy quest data
  useEffect(() => {
    const getDummyQuestData = () => {
      // set timeout of 3 sec to simulate fetching from an actual api
      setTimeout(() => {
        setQuestData(questsDummyData);
      }, 3000);
    };

    getDummyQuestData();
  }, []);

  return (
    <>
      <WelcomeBanner />
      <Tabs defaultValue={tabMenuData[0].value} className="mt-6 w-full md:mt-5">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
          <div className="lg:mr-auto">
            <h3
              className="text-xl capitalize leading-7 text-secondary-110"
              style={{ fontFamily: "Axiforma-SemiBold" }}
            >
              Quests
            </h3>

            <p
              className="text-xs leading-6 text-secondary-100 md:text-sm xl:text-base"
              style={{ fontFamily: "Axiforma" }}
            >
              Pick a quest, Delve In, Learn new words and save the day.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 md:gap-4 xl:gap-6">
            <div className="mr-auto md:mr-0">
              <TabsMenu tabMenuData={tabMenuData} />
            </div>
            <DifficultySelect />
          </div>
        </div>
        <div className="mt-5 rounded-3xl bg-white p-4 ring-1 ring-neutral-40">
          <TabsContent className="h-full" value="allQuests">
            <div className="grid grid-cols-4 gap-4">
              {questData ? (
                questData.map((data, index) => {
                  const { id, image, numberOfWord, title } = data;

                  return (
                    <QuestCard
                      id={id}
                      image={image}
                      numberOfWords={numberOfWord}
                      title={title}
                      key={index}
                    />
                  );
                })
              ) : (
                <>
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                </>
              )}
            </div>
          </TabsContent>
          <TabsContent className="h-full" value="inProgress">
            <div className="grid grid-cols-4 gap-4">
              {questData ? (
                questData
                  .filter((data) => data.status.completed)
                  .map((data, index) => {
                    const { id, image, numberOfWord, title } = data;

                    return (
                      <QuestCard
                        id={id}
                        image={image}
                        numberOfWords={numberOfWord}
                        title={title}
                        key={index}
                      />
                    );
                  })
              ) : (
                <>
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                </>
              )}
            </div>
          </TabsContent>
          <TabsContent className="h-full" value="completed">
            <div className="grid grid-cols-4 gap-4">
              {questData ? (
                questData
                  .filter((data) => data.status.completed)
                  .map((data, index) => {
                    const { id, image, numberOfWord, title } = data;

                    return (
                      <QuestCard
                        id={id}
                        image={image}
                        numberOfWords={numberOfWord}
                        title={title}
                        key={index}
                      />
                    );
                  })
              ) : (
                <>
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                  <LoadingQuestCard />
                </>
              )}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default UserDashboard;
