"use client";

import { useState } from "react";

interface ToggleSwitchProperties {
  variant?: "default" | "bordered";
}

const ToggleSwitch = ({ variant = "default" }: ToggleSwitchProperties) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      role="button"
      className={`flex h-8 w-16 cursor-pointer items-center rounded-full p-1 ${
        isOn ? "bg-orange-500" : "bg-neutral-40"
      } ${variant === "bordered" ? (isOn ? "border-primary-20" : "border-orange-500") : ""} ${
        variant === "bordered" ? "border-2" : ""
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`h-6 w-6 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${
          isOn ? "translate-x-8" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
