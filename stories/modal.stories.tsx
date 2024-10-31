import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ModalDemo from "./modal-demo"; 
import ModalConfirm from "./modal-confirm";
import ModalLogin from "./modal-login";
import ModalNotice from "./modal-notice";
import ModalPic from "./modal-pic";
import ModalSignup from "./modal-signup";

export default {
  title: "Components/Modals",
  component: ModalDemo, 
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Control if the modal is open or not",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "Title of the modal",
      defaultValue: "Modal Title",
    },
    content: {
      control: "text",
      description: "Content inside the modal",
      defaultValue: "This is the content of the modal.",
    },
  },
} as ComponentMeta<typeof ModalDemo>;


const Template: ComponentStory<typeof ModalDemo> = (args) => <ModalDemo {...args} />;


export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: true,
  title: "Default Modal",
  content: "This is the default modal.",
};


export const ConfirmModal = (args: any) => <ModalConfirm {...args} />;
ConfirmModal.args = {
  isOpen: true,
  title: "Confirmation Modal",
  content: "Are you sure you want to proceed?",
};


export const LoginModal = (args: any) => <ModalLogin {...args} />;
LoginModal.args = {
  isOpen: true,
  title: "Login Modal",
  content: "Please enter your login credentials.",
};


export const NoticeModal = (args: any) => <ModalNotice {...args} />;
NoticeModal.args = {
  isOpen: true,
  title: "Notice Modal",
  content: "This is an important notice.",
};


export const PicModal = (args: any) => <ModalPic {...args} />;
PicModal.args = {
  isOpen: true,
  title: "Picture Modal",
  content: "Here is the picture you uploaded.",
};


export const SignupModal = (args: any) => <ModalSignup {...args} />;
SignupModal.args = {
  isOpen: true,
  title: "Signup Modal",
  content: "Please create a new account.",
};