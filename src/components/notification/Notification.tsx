import { notifications } from "./data";

const Notification: React.FC = () => {
  return (
    <div className="shadow-lg mx-auto w-full max-w-sm overflow-hidden rounded-b-xl bg-white">
      <div className="flex items-center justify-between rounded-t-xl bg-secondary-110 px-5 py-6">
        <h1 className="font-semibold text-white">Notifications</h1>
        <a
          href="#"
          className="text-sm font-medium text-primary-100 hover:underline"
        >
          View All
        </a>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 border-b px-6 py-4 hover:bg-neutral-10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-30">
              <span className="text-xl text-primary-100">
                {notification.icon}
              </span>
            </div>
            <div className="w-1/3 flex-grow">
              <p className="text-sm font-normal text-secondary-120">
                {notification.message}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-normal text-neutral-120">
                {notification.date}
              </p>
              {notification.isNew && (
                <span className="absolute -right-3 mr-6 text-xs text-primary-100">
                  ●
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
