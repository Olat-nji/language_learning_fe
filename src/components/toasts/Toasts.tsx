"use client";

import { CircleCheckBig, CircleX } from "lucide-react";
import React from "react";

import CustomButton from "../common/common-button/common-button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "../ui/toast";

type ToastsProperties = {
  variant?: "default" | "critical" | null | undefined; // Toast variant
  textTitle?: string; // Title text for the toast
  textDescription: string; // Description text for the toast
};

const Toasts: React.FC<ToastsProperties> = ({
  variant,
  textTitle,
  textDescription,
}) => {
  const [open, setOpen] = React.useState(false);

  const showToast = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 5000); // Auto-close after 5 seconds
  };

  return (
    <div>
      <CustomButton onClick={showToast} variant="primary">
        Show Toast
      </CustomButton>
      <ToastViewport />

      {open && (
        <Toast open={open} onOpenChange={setOpen} variant={variant}>
          <div className="flex">
            <ToastTitle>{textTitle}</ToastTitle>
            <ToastDescription>
              <div
                className={`flex flex-row items-center gap-[20px] font-lilita`}
              >
                {variant == "critical" ? (
                  <CircleX data-testid="icon-check" />
                ) : (
                  <CircleCheckBig data-testid="icon-check" />
                )}
                {textDescription}
              </div>
            </ToastDescription>
            <ToastAction asChild altText="">
              <button className="action-btn">Undo</button>
            </ToastAction>
            <ToastClose />
          </div>
        </Toast>
      )}
    </div>
  );
};

export default Toasts;
