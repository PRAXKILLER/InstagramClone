import React from "react";
import ProfileSmallScreens from "../components/Profile/ProfileSmallScreens";
import UserProfileHeader from "../components/Profile/UserProfileHeader";

function ProfilePage() {
  return (
    <div>
      <div className="md:flex flex-col h-full w-full hidden">
        <UserProfileHeader />
      </div>
      <div className="md:hidden">
        <ProfileSmallScreens />
      </div>
    </div>
  );
}

export default ProfilePage;
