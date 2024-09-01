import React, { useState } from "react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/sydney/ui/button"
import Messages from "@/registry/sydney/ui/messages"

export function MessageWarning() {
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
      <Button onClick={showMessage}>Display warning message</Button>
      <Messages
        icon={
          <ExclamationTriangleIcon
            style={{ color: "#FF8000", marginRight: "10px" }}
          />
        }
        description="This is a warning message!"
        duration={30000}
        isVisible={isVisible}
        hideMessage={hideMessage}
      />
    </div>
  )
}
export default MessageWarning
