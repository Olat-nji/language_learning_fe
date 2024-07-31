import CustomButton from "~/components/common/common-button/common-button";

interface cardProperties {
  title: string;
  points: number;
  description: string;
  stage: number;
  levels: number;
}

const QuestSceneCard = ({
  title,
  points,
  description,
  stage,
  levels,
}: cardProperties) => {
  return (
    <section
      className="relative h-fit w-[100%] rounded-[28px] border-[2px] border-gray-100 md:w-[600px]"
      data-testid="mobile-element"
    >
      <div className="absolute inset-0 rounded-[28px] bg-black p-[24px] opacity-75"></div>
      <div className="rounded-[28px] p-[24px] backdrop-blur-sm backdrop-filter">
        <h3
          className={`font-fira mb-[10px] text-[24px] font-semibold text-primary-100 md:text-[36px]`}
        >
          {title}
        </h3>
        <p className="mb-[10px] font-bold text-white">
          <span className="text-primary-100">{points}</span>Points
        </p>
        <p
          className={`mb-[15px] text-[14px] font-thin text-[#ECECEC] text-white md:text-[16px]`}
        >
          {description}
        </p>
        <div className="flex items-center space-x-[10px]">
          <p className="rounded-[8px] border-[0.1px] border-gray-100 bg-white bg-opacity-10 p-[8px] text-[12px] text-white md:text-[14px]">
            {stage} 1
          </p>
          <div className="h-[9px] w-[9px] rounded-full border-[0.1px] bg-transparent"></div>
          <p className="rounded-[8px] border-[0.1px] border-gray-100 bg-white bg-opacity-10 p-[8px] text-[12px] text-white md:text-[14px]">
            4 {levels}
          </p>
        </div>
        <div className="mt-[35px] block items-center gap-[10px] md:flex">
          <CustomButton
            variant="primary"
            className="w-full bg-white text-primary-100 hover:bg-primary-50 hover:text-white"
          >
            Back
          </CustomButton>
          <CustomButton variant="primary" className="mt-[15px] w-full md:mt-0">
            Play Quest
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default QuestSceneCard;
