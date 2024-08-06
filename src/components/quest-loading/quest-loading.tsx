import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";

interface QuestLoadingProperties {
  tips: string[];
}

export default function QuestLoading({ tips }: QuestLoadingProperties) {
  const [index, setIndex] = useState(0);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "n") {
      setIndex((previous) => (previous < tips.length - 1 ? previous + 1 : 0));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="min-h-[224px] bg-[#f9fafa] px-[24px] py-[24px] lg:px-[78px]">
      <h1 className="mb-[16px] text-[28px] font-bold leading-[42px] text-primary-80">
        Loading...
      </h1>
      <div className="mb-[16px] rounded-[40px] bg-secondary-20 p-[16px]">
        <div className="increment-loader-width-animation relative h-[40px] rounded-[40px] bg-primary-90">
          <Image
            src="/gifs/fire-emoji.gif"
            alt="Fire emoji"
            width={110}
            height={110}
            className="top-50 absolute right-[-50px] translate-y-[-50%]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <p className="font-medium text-secondary-120">{tips[index]}</p>
        <div className="flex items-center gap-[8px]">
          <p className="text-secondary 120 text-[14px] font-medium leading-[18px]">
            Press N for next tip
          </p>
          <div className="flex items-center gap-[12px]">
            {tips.map((_, _index) => (
              <button
                key={_index}
                className={cn(
                  "h-[24px] w-[24px] rounded-full bg-transparent-black-15",
                  _index === index && "bg-[#212121]",
                )}
                onClick={() => setIndex(_index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
