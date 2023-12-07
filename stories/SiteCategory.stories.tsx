import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  SiteCategory,
  siteCategoryProps,
} from "../layouts/components/text/SiteCategory";

export default {
  title: "Components/SiteCategory",
  component: SiteCategory,
} as Meta;

const Template: Story<siteCategoryProps> = (args) => <SiteCategory {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "/example",
  text: "Example",
  className: "category-link",
};
