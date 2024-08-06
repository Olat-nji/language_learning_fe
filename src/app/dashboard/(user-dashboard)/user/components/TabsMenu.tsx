import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const TabsMenu = () => {
  return (
    <>
      <TabsList className="h-full rounded-full bg-white p-1 ring-1 ring-neutral-40">
        <TabsTrigger
          style={{ fontFamily: "Axiforma" }}
          className="rounded-full px-7 py-2.5 text-sm text-secondary-60 outline-none duration-300 ease-in focus:bg-neutral-30 focus:text-secondary-120 focus:shadow-inner-button active:bg-neutral-30 active:text-secondary-120"
          value="allQuests"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          style={{ fontFamily: "Axiforma" }}
          className="rounded-full px-7 py-2.5 text-sm text-secondary-60 outline-none duration-300 ease-in focus:bg-neutral-30 focus:text-secondary-120 focus:shadow-inner-button active:bg-neutral-30 active:text-secondary-120"
          value="inProgress"
        >
          In Progress
        </TabsTrigger>
        <TabsTrigger
          style={{ fontFamily: "Axiforma" }}
          className="rounded-full px-7 py-2.5 text-sm text-secondary-60 outline-none duration-300 ease-in focus:bg-neutral-30 focus:text-secondary-120 focus:shadow-inner-button active:bg-neutral-30 active:text-secondary-120"
          value="completed"
        >
          Completed
        </TabsTrigger>
      </TabsList>
    </>
  );
};

export default TabsMenu;
