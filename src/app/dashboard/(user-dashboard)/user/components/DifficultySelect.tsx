import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MenuProperties {
  id: number;
  text: string;
  onChange: (index: number) => void;
}

const DifficultySelect = () => {
  const [difficulty, setDifficulty] = useState<string>("Difficulty");

  const changeDifficulty = (id: number) => {
    const selectedData = dropdownMenu.find((data) => data.id === id);

    if (selectedData) {
      setDifficulty(selectedData.text);
    }
  };

  const dropdownMenu: MenuProperties[] = [
    {
      id: 1,
      text: "Beginner",
      onChange: changeDifficulty,
    },

    {
      id: 2,
      text: "Intermediate",
      onChange: changeDifficulty,
    },

    {
      id: 3,
      text: "Advanced",
      onChange: changeDifficulty,
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="flex h-full w-40 items-center gap-2 rounded-xl bg-white px-2 py-3 text-sm text-secondary-120 outline-none ring-1 ring-neutral-40"
          style={{ fontFamily: "Axiforma" }}
        >
          <div className="mr-auto">{difficulty}</div>
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-[150px] overflow-hidden rounded-xl bg-white shadow-dropdown duration-300">
          {dropdownMenu.map((data, index) => {
            const { onChange, text, id } = data;

            return (
              <DropdownMenuItem
                onClick={() => onChange(id)}
                key={index}
                className="w-full cursor-pointer bg-transparent p-2 text-sm font-normal text-neutral-140 outline-none duration-300 ease-in hover:bg-neutral-30"
              >
                {text}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DifficultySelect;
