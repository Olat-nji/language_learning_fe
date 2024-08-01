import { useState } from "react";

interface VolumeBarProperties {
  value: number;
}

const VolumeBar = ({ value }: VolumeBarProperties) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(Number.parseInt(event.target.value, 10));
  };
  return (
    <div className="relative flex h-[26px] w-[269] items-center justify-center">
      <div className="absolute h-[26px] w-[269px] rounded-full">
        <div className="h-full w-full rounded-full border-[2px] border-solid border-primary-110">
          <div className="flex h-full w-full items-center rounded-full border-[1px] border-solid border-transparent-black-45 bg-secondary-120">
            <div
              className="h-[22px] rounded-[20px] bg-primary-100"
              style={{
                width: `${internalValue}px`,
                boxShadow:
                  "0px 3px 10px 0px rgba(254, 124, 50, 1) inset, 0px -3px 10px 0px rgba(103, 69, 55, 1) inset",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="h-[26px] w-[269px] opacity-0">
        <input
          type="range"
          min={20}
          max={269}
          value={internalValue}
          onChange={handleChange}
          className="custom-range h-full w-full cursor-pointer appearance-none rounded-full bg-gray-300"
          style={{
            background: `linear-gradient(to right, #1597ff 0%, #1597ff ${internalValue}%, #ddd ${internalValue}%, #ddd 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default VolumeBar;
