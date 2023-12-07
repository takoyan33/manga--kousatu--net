import React from "react";
import { Story } from "@storybook/react";
import Richedita from "../layouts/components/ui/Richedita";

export default {
  title: "Components/Richedita",
  component: Richedita,
};

const Template: Story<any> = (args) => <Richedita {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (plainText: string, html: string) => {
    console.log("Plain Text:", plainText);
    console.log("HTML:", html);
  },
  value: "",
};
