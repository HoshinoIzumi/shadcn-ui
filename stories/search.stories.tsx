import { Meta, Story } from "@storybook/react";
import { BasicSearch } from "./search-demo";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";

// This is the default export that defines the metadata for the story
export default {
  title: "Components/Search",
  component: BasicSearch,
  argTypes: {
    buttonColor: {
      control: "color",
      description: "Button background color",
      defaultValue: "#000000",
    },
    placeholderText: {
      control: "text",
      description: "Placeholder text for the search input",
      defaultValue: "Find Anything...",
    },
    formWidth: {
      control: "text",
      description: "Width of the form (tailwind width classes)",
      defaultValue: "w-2/3",
    },
    buttonText: {
      control: "text",
      description: "Text inside the search button",
      defaultValue: "Search",
    },
  },
} as Meta;

// Template for rendering BasicSearch with adjustable props
const Template: Story = ({ buttonColor, placeholderText, formWidth, buttonText }) => {
  return (
    <div className="p-4">
      <form className={`${formWidth} space-y-6`}>
        <Input placeholder={placeholderText} />
        <Button
          variant="default"
          style={{ marginTop: '5px', backgroundColor: buttonColor }}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

// Default story with customizable controls
export const Default = Template.bind({});
Default.args = {
  buttonColor: "#000000",
  placeholderText: "Find Anything...",
  formWidth: "w-2/3",
  buttonText: "Search",
};
