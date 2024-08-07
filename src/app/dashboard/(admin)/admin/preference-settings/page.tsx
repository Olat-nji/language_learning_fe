import ToggleSwitch from "~/components/toggle/ToggleSwitch";

const AdminPreferenceSettings: React.FC = () => {
  return (
    <section className="shadow-sm mx-auto max-w-full bg-[#FFFFFF] px-4 py-8 md:px-6 lg:px-8 xl:max-w-7xl">
      <div className="flex flex-col gap-8 lg:h-[792px] lg:flex-row">
        <div className="flex w-full flex-col lg:w-1/2 lg:overflow-y-auto">
          <LanguageSelectionDiv />
          <SocialsDiv />
        </div>
        <div className="w-full lg:w-1/2 lg:overflow-y-auto">
          <NotificationCommunicationDiv />
        </div>
      </div>
    </section>
  );
};

const LanguageSelectionDiv: React.FC = () => {
  return (
    <div className="mb-8 w-full rounded-tl-xl bg-[#F8FAFB] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-axiforma text-base font-semibold text-[#2A2A2A]">
          Language selection
        </h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="font-axiforma text-xs font-normal text-[#717171]">
        Choose which languages are available for learners to study.
      </p>
    </div>
  );
};

const SocialsDiv: React.FC = () => {
  const socialPlatforms = ["Facebook", "Google", "Instagram", "Apple"];

  return (
    <div className="w-full bg-[#F8FAFB] p-5">
      <h2 className="mb-4 font-axiforma text-base font-semibold text-[#2A2A2A]">
        Socials
      </h2>
      <p className="mb-6 font-axiforma text-xs font-normal text-[#717171]">
        Link social media accounts to share game-related content directly, like
        achievements, milestones, or custom content.
      </p>
      <div className="flex flex-col space-y-3">
        {socialPlatforms.map((platform) => (
          <div key={platform} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="ml-2">{platform}</span>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotificationCommunicationDiv: React.FC = () => {
  return (
    <div className="w-full bg-[#F8FAFB] p-5">
      <div className="max-h-full space-y-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="mb-4 font-axiforma text-base font-semibold text-[#2A2A2A]">
            Notification & Communication
          </h2>
          <p className="font-axiforma text-xs font-normal text-[#717171]">
            Manage automated notifications that keep users informed about their
            progress, upcoming assessments, or other important updates.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="mb-2 font-axiforma text-base font-normal text-[#2A2A2A]">
            Notification preference
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              progress updates
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              new content available
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="mb-2 font-axiforma text-base font-normal text-[#2A2A2A]">
            Delivery Method
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Email
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              SMS
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              In-app
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-4">
            <h2 className="mb-2 font-axiforma text-base font-semibold text-[#2A2A2A]">
              Notification frequency
            </h2>
            <p className="font-axiforma text-xs font-normal text-[#717171]">
              Set how often you want notification sent
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Daily
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Weekly
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Monthly
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPreferenceSettings;
