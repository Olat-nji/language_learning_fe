"use client";

import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

type Properties = {
  placeholder?: string;
  Icon?: string | React.ElementType;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
  error?: string;
  label?: string;
  inputType?: "password" | "text" | "textarea";
  name?: string;
  value?: string;
  className?: string;
};

const CustomInput: React.FC<Properties> = ({
  placeholder,
  Icon,
  onChange,
  error,
  label,
  inputType,
  name,
  value,
  className,
}) => {
  return (
    <>
      <div className="flex w-full flex-col items-start">
        <label htmlFor={label} className="text-[14px] text-secondary-70">
          {label}
        </label>
        <div
          className={`active:shadow-custom-purple active:border-primary-default focus-within:border-primary-default focus-within:shadow-custom-purple relative flex w-full items-center gap-[15px] rounded-[8px] border bg-white px-[16px] py-[12px] duration-100 ${error ? "border-red text-red" : "text-dark border-neutral-40"}`}
        >
          {Icon && <Icon data-testid="custom-icon" className="text-grey-500" />}

          {inputType === "textarea" ? 
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`${className} placeholder:text-seconday-40 min-h-[100px] flex-1 text-[14px] outline-none`}
          />
          :
          <input
            name={name}
            type={inputType}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`${className} placeholder:text-seconday-40 h-[18px] flex-1 text-[14px] outline-none`}
          />}

          <p className="text-body-s text-red mt-[16px]">{error}</p>
        </div>
      </div>
    </>
  );
};

export default CustomInput;
