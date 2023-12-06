import { Story, Meta } from "@storybook/react";
import {
  SiteButton,
  SiteButtonProps,
} from "../layouts/components/button/SiteButton";

export default {
  title: "Components/SiteButton",
  component: SiteButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<SiteButtonProps> = (args) => <SiteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Click me!",
  className: "storybook-button",
};
