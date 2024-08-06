import ProfileSettingsTab from "~/components/common/profileSettingsTab/ProfileSettingsTab";
import AdminLayout from "../(admin)/layout";

const ProfileSettings = () => {
  return (
    <div>
      <AdminLayout>
        <ProfileSettingsTab />
      </AdminLayout>
    </div>
  );
};

export default ProfileSettings;
