import React, { useState } from "react"
import { SendHorizontal } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

type MessageType = "sent" | "received"

export function NormalChat() {
  const [messages, setMessages] = useState<
    Array<{ text: string; type: MessageType }>
  >([
    { text: "Hi, how can I help you today?", type: "received" },
    { text: "Hey, I'm having trouble with my account.", type: "sent" },
    { text: "What seems to be the problem?", type: "received" },
    { text: "I can't log in.", type: "sent" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const { toast } = useToast()

  const handleSent = () => {
    toast({
      description: (
        <div className="w-[340px] rounded-md bg-slate-950 p-4 text-black">
          The Message is: {newMessage}
        </div>
      ),
    })
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    setMessages([...messages, { text: newMessage, type: "sent" }])
    handleSent()
    setNewMessage("")
  }

  const messageStyles = {
    sent: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "10px",
      padding: "12px",
      margin: "5px 0",
      wordBreak: "break-all" as const,
      maxWidth: "300px",
    },
    received: {
      backgroundColor: "lightgrey",
      color: "black",
      borderRadius: "10px",
      padding: "12px",
      margin: "5px 0",
      wordBreak: "break-all" as const,
      maxWidth: "300px",
    },
  }

  return (
    <>
      <Toaster />
      <Card
        className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-sm"
        style={{ width: "500px" }}
      >
        <CardHeader className="items-left flex justify-between bg-gray-100 p-4">
          <div>
            <div style={{ fontWeight: "bold" }}>Sofia Davis</div>
            <div style={{ fontSize: "0.875rem", color: "#999999" }}>
              m@example.com
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "sent" ? "justify-end" : "justify-start"
              }`}
            >
              <span style={messageStyles[message.type]}>{message.text}</span>
            </div>
          ))}
          <form className="mt-2 flex" onSubmit={sendMessage}>
            <Input
              type="text"
              placeholder="Type your message..."
              className="mr-2 flex-grow rounded-full border-gray-300 p-2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              variant="destructive"
              disabled={!newMessage.trim()}
              style={{ marginRight: "8px", padding: "4px 6px" }}
              type="submit"
            >
              <span className="flex items-center gap-2">
                <SendHorizontal className="sent-icon" />
              </span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default NormalChat
