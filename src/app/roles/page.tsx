import { ReactNode } from "react";

import AdminNav from "~/components/AdminNav/AdminNav";
import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";

interface rolesProperties {
  children: ReactNode;
}
const RolesAndPermission = ({ children }: rolesProperties) => {
  return (
    <div>
      <AdminNav />
      <div className="flex">
        <AdminSidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default RolesAndPermission;
