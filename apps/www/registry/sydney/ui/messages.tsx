import React, { useEffect, useState } from "react"
import { X } from "lucide-react"

interface MessageProps {
  icon?: JSX.Element
  description: string
  duration: number
  isVisible: boolean
  hideMessage: () => void
}

const Messages: React.FC<MessageProps> = ({
  icon,
  description,
  duration,
  isVisible,
  hideMessage,
}) => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (isVisible) {
      timer = setTimeout(() => {
        hideMessage()
      }, duration)
    }
    return () => clearTimeout(timer)
  }, [isVisible, duration, hideMessage])

  return (
    isVisible && (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "all 0.5s ease-out",
          display: "flex",
          alignItems: "center",
          zIndex: 100000,
        }}
      >
        {icon && <span>{icon}</span>}
        <span>{description}</span>
        <span
          style={{
            marginLeft: "10px",
            opacity: 0,
            transition: "opacity 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={({ currentTarget }) =>
            (currentTarget.style.opacity = "1")
          }
          onMouseOut={({ currentTarget }) =>
            (currentTarget.style.opacity = "0")
          }
          onClick={hideMessage}
        >
          <X />
        </span>
      </div>
    )
  )
}

export default Messages
