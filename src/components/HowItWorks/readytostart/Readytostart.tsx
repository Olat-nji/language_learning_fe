import React from "react";

import CustomButton from "~/components/common/common-button/common-button";

const ReadyToStart = () => {
  return (
    <>
      <section className="mb-[132px] hidden items-center gap-14 border-[40px] border-secondary-120 px-20 py-[120px] lg:flex ">
        <div className="flex flex-col gap-10">
          <h3 className="text-[40px] font-semibold leading-[60px] tracking-tighter text-secondary-120">
            <span className="text-[40px] font-semibold leading-[60px] text-secondary-60">
              Ready To{" "}
            </span>
            Start Your Language Adventure?
          </h3>
          <CustomButton variant="primary">Delve In</CustomButton>
        </div>
        <div className="flex self-center lg:w-[746px]">
          <p className="text-[18px] font-normal leading-[30px] tracking-tighter text-secondary-110">
            {" "}
            Dive in now and play the game to explore different quests, beat the
            clock, and master new languages with ease. Start your journey today!
          </p>
        </div>
      </section>

    {/* mobile */}
      <section className="flex w-full flex-col justify-center items-center lg:hidden gap-9 border-3 border-secondary-120 px-4 py-16 mb-[14px] ">
      <h3 className="text-3xl text-center font-semibold leading-[36px] text-secondary-120">
            <span className="text-3xl font-semibold leading-[36px] text-secondary-60">
              Ready To{" "}
            </span>
            Start Your Language Adventure?
        </h3>
        <p className="text-[18px] text-center font-normal leading-[30px] text-secondary-110">
            {" "}
            Dive in now and play the game to explore different quests, beat the
            clock, and master new languages with ease. Start your journey today!
        </p>
        <CustomButton className="w-full" variant="primary">Delve In</CustomButton>
      </section>
    </>
  );
};

export default ReadyToStart;
