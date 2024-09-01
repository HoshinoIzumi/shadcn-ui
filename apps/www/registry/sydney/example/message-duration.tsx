import React, { useState } from "react"
import { CheckCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/sydney/ui/button"
import Messages from "@/registry/sydney/ui/messages"

export function MessageDuration() {
  const [isVisible, setIsVisible] = useState(false)

  const showMessage = () => {
    setIsVisible(true)
  }

  const hideMessage = () => {
    setIsVisible(false)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <Button onClick={showMessage}>Display duration message</Button>
      <Messages
        icon={
          <CheckCircledIcon style={{ color: "#21AB12", marginRight: "10px" }} />
        }
        description="This is a prompt message for success, and it will disappear in 3 seconds!"
        duration={3000}
        isVisible={isVisible}
        hideMessage={hideMessage}
      />
    </div>
  )
}

export default MessageDuration
