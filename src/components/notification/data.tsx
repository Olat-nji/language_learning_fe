import { Icon } from "@iconify/react";

interface Notification {
  icon: JSX.Element;
  message: string;
  date: string;
  isNew: boolean;
}

export const notifications: Notification[] = [
  {
    icon: <Icon icon="lucide:medal" />,
    message:
      'You have gained a new badge "Ultimate Player" for beating record time consistently.',
    date: "July 20",
    isNew: true,
  },
  {
    icon: <Icon icon="mdi:tick" />,
    message: "You have beat your record! Great job!",
    date: "July 19",
    isNew: false,
  },
  {
    icon: <Icon icon="ph:diamond" />,
    message: "You are now Player #45 on the leaderboard. Keep going!",
    date: "July 18",
    isNew: false,
  },
  {
    icon: <Icon icon="mdi:tick" />,
    message: "Your email has been successfully verified",
    date: "July 17",
    isNew: false,
  },
];
