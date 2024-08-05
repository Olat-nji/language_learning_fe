import { FC, ReactNode } from "react";

interface Iproperties {
  children: ReactNode;
}
const layout: FC<Iproperties> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      {/* Sidebar */}
      <div className="mt-7">{children}</div>
    </div>
  );
};

export default layout;
