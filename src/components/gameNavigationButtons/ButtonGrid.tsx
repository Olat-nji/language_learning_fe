// ButtonGrid.tsx

"use client";

import { FastForward, Mic, MicOff, Pause, Play, Rewind, X } from "lucide-react";
import { useState } from "react";

interface Button {
  id: number;
  icon: JSX.Element;
  hoverIcon?: JSX.Element;
  activeIcon?: JSX.Element;
  backgroundColor: string;
}

const buttons: Button[] = [
  {
    id: 1,
    icon: <Rewind />,
    backgroundColor: "bg-[#9000FF] opacity-50 border-[2px] border-[#FE6A19]",
  },
  {
    id: 2,
    icon: <FastForward />,
    backgroundColor: "bg-[#9000FF] opacity-50 border-[2px] border-[#FE6A19]",
  },
  {
    id: 3,
    icon: <X />,
    backgroundColor: "bg-[#9000FF] opacity-50 border-[2px] border-[#FE6A19]",
  },
  {
    id: 4,
    icon: <Play />,
    activeIcon: <Pause />,
    backgroundColor: "bg-[#9000FF] opacity-50 border-[2px] border-[#FE6A19]",
  },
  {
    id: 5,
    icon: <Pause />,
    activeIcon: <Play />,
    backgroundColor: "bg-[#9000FF] opacity-50 border-[2px] border-[#FE6A19]",
  },
  {
    id: 6,
    icon: <Mic />,
    hoverIcon: <MicOff />,
    backgroundColor: "bg-[#9000FF] opacity-50 border-[2px] border-[#FE6A19]",
  },

  {
    id: 7,
    icon: <Rewind />,
    backgroundColor:
      "bg-[#9000FF] border-[2px] border-[#FE6A19] border-opacity-[50%]",
  },
  {
    id: 8,
    icon: <FastForward />,
    backgroundColor:
      "bg-[#9000FF] border-[2px] border-[#FE6A19] border-opacity-[50%]",
  },
  {
    id: 9,
    icon: <X />,
    backgroundColor:
      "bg-[#9000FF] border-[2px] border-[#FE6A19] border-opacity-[50%]",
  },
  {
    id: 10,
    icon: <Play />,
    activeIcon: <Pause />,
    backgroundColor:
      "bg-[#9000FF] border-[2px] border-[#FE6A19] border-opacity-[50%]",
  },
  {
    id: 11,
    icon: <Pause />,
    activeIcon: <Play />,
    backgroundColor:
      "bg-[#9000FF] border-[2px] border-[#FE6A19] border-opacity-[50%]",
  },
  {
    id: 12,
    icon: <Mic />,
    hoverIcon: <MicOff />,
    backgroundColor:
      "bg-[#9000FF] border-[2px] border-[#FE6A19] border-opacity-[50%]",
  },

  {
    id: 13,
    icon: <Rewind />,
    backgroundColor:
      "bg-[#5D00CC] border-[2px] border-[#FE6A19] border-opacity-[60%]",
  },
  {
    id: 14,
    icon: <FastForward />,
    backgroundColor:
      "bg-[#5D00CC] border-[2px] border-[#FE6A19] border-opacity-[60%]",
  },
  {
    id: 15,
    icon: <X />,
    backgroundColor:
      "bg-[#5D00CC] border-[2px] border-[#FE6A19] border-opacity-[60%]",
  },
  {
    id: 16,
    icon: <Play />,
    activeIcon: <Pause />,
    backgroundColor:
      "bg-[#5D00CC] border-[2px] border-[#FE6A19] border-opacity-[60%]",
  },
  {
    id: 17,
    icon: <Pause />,
    activeIcon: <Play />,
    backgroundColor:
      "bg-[#5D00CC] border-[2px] border-[#FE6A19] border-opacity-[60%]",
  },
  {
    id: 18,
    icon: <Mic />,
    hoverIcon: <MicOff />,
    backgroundColor:
      "bg-[#5D00CC] border-[2px] border-[#FE6A19] border-opacity-[60%]",
  },

  {
    id: 19,
    icon: <Rewind />,
    backgroundColor:
      "bg-[#4300B2] text-[#FEAC80] border-[2px] border-[#FEAC80] border-opacity-[60%]",
  },
  {
    id: 20,
    icon: <FastForward />,
    backgroundColor:
      "bg-[#4300B2] text-[#FEAC80] border-[2px] border-[#FEAC80] border-opacity-[60%]",
  },
  {
    id: 21,
    icon: <X />,
    backgroundColor:
      "bg-[#4300B2] text-[#FEAC80] border-[2px] border-[#FEAC80] border-opacity-[60%]",
  },
  {
    id: 22,
    icon: <Play />,
    activeIcon: <Pause />,
    backgroundColor:
      "bg-[#4300B2] text-[#FEAC80] border-[2px] border-[#FEAC80] border-opacity-[60%]",
  },
  {
    id: 23,
    icon: <Pause />,
    activeIcon: <Play />,
    backgroundColor:
      "bg-[#4300B2] text-[#FEAC80] border-[2px] border-[#FEAC80] border-opacity-[60%]",
  },
  {
    id: 24,
    icon: <Mic />,
    hoverIcon: <MicOff />,
    activeIcon: <MicOff />,
    backgroundColor:
      "bg-[#4300B2] text-[#FEAC80] border-[2px] border-[#FEAC80] border-opacity-[60%]",
  },
];

const ButtonGrid: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | undefined>();
  const [hoveredButton, setHoveredButton] = useState<number | undefined>();
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setActiveButton(id);
    if (clickedButtons.includes(id)) {
      setClickedButtons(clickedButtons.filter((buttonId) => buttonId !== id));
    } else {
      setClickedButtons([...clickedButtons, id]);
    }
  };

  return (
    <div className="flex h-fit bg-[#444444]">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div
          className={`mx-auto grid grid-cols-6 items-center justify-center gap-10 rounded-lg p-4`}
        >
          {buttons.map((button) => (
            <div
              key={button.id}
              data-testid={`button-${button.id}`}
              className={`border-[2px flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[#FEAC80] p-[8px] text-[#FE6A19] ${
                activeButton === button.id ? "shadow-inner-custom-1" : ""
              } ${button.backgroundColor}`}
              onClick={() => handleClick(button.id)}
              onMouseEnter={() => setHoveredButton(button.id)}
              onMouseLeave={() => setHoveredButton(undefined)}
            >
              {clickedButtons.includes(button.id) && button.activeIcon
                ? button.activeIcon
                : hoveredButton === button.id && button.hoverIcon
                  ? button.hoverIcon
                  : button.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;
