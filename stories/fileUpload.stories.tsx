import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import FileUploadComponent from "./fileUpload-demo"; 
import { Button } from "@/registry/default/ui/button"; 
import { toast } from "@/registry/default/ui/use-toast"; 

export default {
  title: "Components/FileUpload",
  component: FileUploadComponent,
  argTypes: {
    fileType: {
      control: { type: "select" },
      options: ["image/*", "application/pdf", "text/plain", "audio/*", "video/*", "*/*"],
      description: "The type of file allowed for upload",
      defaultValue: "image/*",
    },
    chooseFileText: {
      control: "text",
      description: "Text displayed on the file choose button",
      defaultValue: "Choose File",
    },
    noFileChosenText: {
      control: "text",
      description: "Text displayed when no file is selected",
      defaultValue: "No file chosen",
    },
    buttonBackgroundColor: {
      control: "color",
      description: "Background color of the buttons",
      defaultValue: "#007bff",
    },
    buttonTextColor: {
      control: "color",
      description: "Text color of the buttons",
      defaultValue: "#ffffff",
    },
  },
} as ComponentMeta<typeof FileUploadComponent>;

const Template: ComponentStory<typeof FileUploadComponent> = ({
  fileType,
  chooseFileText,
  noFileChosenText,
  buttonBackgroundColor,
  buttonTextColor,
}) => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.match(fileType)) {
        setSelectedFileName(file.name);
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        toast({
          title: "Error",
          description: `Please select a valid file of type: ${fileType}`,
          duration: 3000,
        });
        setSelectedFileName("");
        setPreviewUrl(null);
      }
    }
  };

  const triggerFileInputClick = () => {
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="file-upload-wrapper">
      <label htmlFor="file-upload" className="file-upload-label">
        Please upload a file:
      </label>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        className="file-upload-input"
        style={{ display: "none" }}
        accept={fileType}
      />
      <div className="file-upload-control">
        <label htmlFor="file-upload" className="cursor-pointer">
          <Button
            asChild
            variant="outline"
            size="default"
            style={{
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor,
            }}
          >
            <span>{chooseFileText}</span>
          </Button>
        </label>
        <span className="file-name px-3">
          {selectedFileName || noFileChosenText}
        </span>
      </div>
      {previewUrl && (
        <div className="file-preview mt-4">
          <img
            src={previewUrl}
            alt="File Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  fileType: "image/*",
  chooseFileText: "Choose File",
  noFileChosenText: "No file chosen",
  buttonBackgroundColor: "#000000",
  buttonTextColor: "#ffffff",
};

export const FormatRestricted = Template.bind({});
FormatRestricted.args = {
  fileType: "*/*",
  chooseFileText: "Select File",
  noFileChosenText: "No restricted format file selected",
  buttonBackgroundColor: "#000000",
  buttonTextColor: "#ffffff",
};

export const PreviewUpload = Template.bind({});
PreviewUpload.args = {
  fileType: "image/*",
  chooseFileText: "Upload and Preview",
  noFileChosenText: "No image selected for preview",
  buttonBackgroundColor: "#000000",
  buttonTextColor: "#ffffff",
};
