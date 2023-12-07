import React from "react";
import { Story, Meta } from "@storybook/react";
import { CommonAvatar, avatarProps } from "../layouts/components/text";

export default {
  title: "Components/CommonAvatar",
  component: CommonAvatar,
} as Meta;

const Template: Story<avatarProps> = (args) => <CommonAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  photoURL: "example.jpg",
  displayname: "John Doe",
};
