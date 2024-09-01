import React, { useState } from "react"
import { InfoCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/sydney/ui/button"
import Messages from "@/registry/sydney/ui/messages"

export function MessageNormal() {
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
      <Button onClick={showMessage}>Display normal message</Button>
      <Messages
        icon={
          <InfoCircledIcon style={{ color: "#1890ff", marginRight: "10px" }} />
        }
        description="This is a normal message!"
        duration={10000}
        isVisible={isVisible}
        hideMessage={hideMessage}
      />
    </div>
  )
}

export default MessageNormal
