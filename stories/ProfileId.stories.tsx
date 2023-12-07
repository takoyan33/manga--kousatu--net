import React from "react";
import { Story } from "@storybook/react";
import { ProfileId, ProfileIdProps } from "../layouts/components/ui/ProfileId";

export default {
  title: "Components/ProfileId",
  component: ProfileId,
};

const Template: Story<ProfileIdProps> = (args) => <ProfileId {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  profileImage: "path_to_image.jpg",
  username: "JohnDoe",
  bio: "Lorem ipsum dolor sit amet",
  favorite: ["Manga1", "Manga2"],
};

export const NoBio = Template.bind({});
NoBio.args = {
  ...Default.args,
  bio: "",
};

export const NoFavoriteManga = Template.bind({});
NoFavoriteManga.args = {
  ...Default.args,
  favorite: [],
};
