import Link from "next/link";

import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/HeroSection";
import LearningGoalModal from "~/components/modals/LearningGoalModal";

function page() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-x-hidden">
      <HeroSection />
      <div className="mt-10 flex flex-col gap-4 px-10 py-5" id="temporary">
        <Link href={"/waitlist"}>
          <CustomButton variant="primary-two">Waitlist Page</CustomButton>
        </Link>
        <Link href={"/guides"}>
          <CustomButton variant="primary-two">Components</CustomButton>
        </Link>
      </div>
      <div id="#modal">
        <LearningGoalModal />
      </div>
    </div>
  );
}
export default page;
