import React from "react";
import { Story } from "@storybook/react";
import { AccountMenu } from "../layouts/components/ui/AccountMenu";

export default {
  title: "Components/AccountMenu",
  component: AccountMenu,
};

const Template: Story<any> = (args) => <AccountMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};
