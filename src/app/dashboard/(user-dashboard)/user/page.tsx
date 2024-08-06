"use client";

import { Tabs, TabsContent } from "~/components/ui/tabs";
import DifficultySelect from "./components/DifficultySelect";
import TabsMenu from "./components/TabsMenu";
import WelcomeBanner from "./components/WelcomeBanner";

const UserDashboard = () => {
  return (
    <>
      <WelcomeBanner />
      <Tabs defaultValue="allQuests" className="mt-5 w-full">
        <div className="flex flex-row items-center">
          <div className="mr-auto">
            <h3
              className="text-xl capitalize leading-7 text-secondary-110"
              style={{ fontFamily: "Axiforma-SemiBold" }}
            >
              Quests
            </h3>

            <p
              className="text-base leading-6 text-secondary-100"
              style={{ fontFamily: "Axiforma" }}
            >
              Pick a quest, Delve In, Learn new words and save the day.
            </p>
          </div>

          <div className="flex flex-row items-center gap-6">
            <TabsMenu />
            <DifficultySelect />
          </div>
        </div>
        <TabsContent value="allQuests">All contents here</TabsContent>
        <TabsContent value="inProgress">In progress content</TabsContent>
        <TabsContent value="completed">Completed content.</TabsContent>
      </Tabs>
    </>
  );
};

export default UserDashboard;
