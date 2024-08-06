import HeroSection from "~/components/HeroSection";
import { TransitionLink } from "~/components/miscellaneous/transition-link";

function page() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-x-hidden">
      <HeroSection />
      <div className="mt-10 flex flex-col gap-4 px-10 py-5" id="temporary">
        <TransitionLink
          href="/waitlist"
          variant="primary-two"
          className="w-fit px-4"
        >
          Waitlist Page
        </TransitionLink>

        <TransitionLink
          href="/guides"
          variant="primary-two"
          className="w-fit px-4"
        >
          Components
        </TransitionLink>
      </div>
    </div>
  );
}
export default page;
