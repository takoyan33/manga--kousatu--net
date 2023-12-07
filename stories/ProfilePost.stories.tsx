import React from "react";
import { Story } from "@storybook/react";
import {
  ProfilePost,
  ProfilePostProps,
} from "../layouts/components/ui/ProfilePost";

export default {
  title: "Components/ProfilePost",
  component: ProfilePost,
};

const Template: Story<ProfilePostProps> = (args) => <ProfilePost {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  profileImage: "top-1.png",
  username: "JohnDoe",
  bio: "Lorem ipsum dolor sit amet",
  favorite: ["Manga1", "Manga2"],
};
