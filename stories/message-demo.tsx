import React, { useState } from "react";
import { CheckCircledIcon, CrossCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "@/registry/sydney/ui/button";
import Messages from "@/registry/sydney/ui/messages";

type MessageNormalProps = {
  iconType: 'duration' | 'error' | 'success' | 'warning';
  messageContent?: string;
  duration?: number;
  backgroundColor?: string;
  buttonTextColor?: string; 
  messageTextColor?: string; 
  size?: string;
};

const iconMapping = {
  duration: <CheckCircledIcon style={{ color: "#21AB12", marginRight: "10px" }} />,
  error: <CrossCircledIcon style={{ color: "#FF0B0B", marginRight: "10px" }} />,
  success: <CheckCircledIcon style={{ color: "#21AB12", marginRight: "10px" }} />,
  warning: <ExclamationTriangleIcon style={{ color: "#FF8000", marginRight: "10px" }} />,
};

const MessageNormal: React.FC<MessageNormalProps> = ({
  iconType,
  messageContent = "This is a default message",
  duration = 3000,
  backgroundColor = "#ffffff", 
  buttonTextColor = "#000000",  
  messageTextColor = "#000000", 
  size = "w-full"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const showMessage = () => setIsVisible(true);
  const hideMessage = () => setIsVisible(false);

  return (
    <div
      className={size}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Button onClick={showMessage} style={{backgroundColor: backgroundColor, color: buttonTextColor}}>
        Display {iconType} message
      </Button>
      <Messages
        icon={iconMapping[iconType]}
        description={messageContent}
        duration={duration}
        isVisible={isVisible}
        hideMessage={hideMessage}
        style={{ color: messageTextColor }}
      />
    </div>
  );
};

export default MessageNormal;
