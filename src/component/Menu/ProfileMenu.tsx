import { useGetUserQuery } from "@/services/api";
import React from "react";

const ProfileMenu = () => {
  const { data, isLoading: lodingUserDetails } = useGetUserQuery({});
  return <div></div>;
};

export default ProfileMenu;

