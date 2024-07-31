"use client";

import React, { ChangeEvent, useState } from "react";

type Properties = {
  placeholder?: string;
  Icon?: string | React.ElementType;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  inputType?: string;
  name?: string;
  value?: string;
};

const InputField: React.FC<Properties> = ({
  placeholder,
  Icon,
  onChange,
  error,
  label,
  inputType,
  name,
  value,
}) => {
  const [type] = useState<"password" | "text">(
    inputType === "password" ? "password" : "text",
  );

  return (
    <>
      <div className="w-full flex flex-col items-start">
        <label htmlFor={label} className="text-[12px] text-dark">
          {label}
        </label>
        <div
          className={`w-full active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex items-center gap-[15px] rounded-[8px] border bg-white px-[16px] py-[12px] duration-100 ${error ? "border-red text-red" : "border-grey-200 text-dark"}`}
        >
          {Icon && <Icon className="text-grey-500" />}

          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="text-[12px] w-full flex-1 outline-none h-[18px]"
          />

          <p className="text-body-s text-red mt-[16px]">
            {error}
          </p>
        </div>
      </div>
    </>
  );
};

export default InputField;
