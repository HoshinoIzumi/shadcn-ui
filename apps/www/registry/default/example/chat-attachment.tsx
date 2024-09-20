import React, { useState } from "react"
import { SendHorizontal, Upload } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export function AttachmentChat() {
  interface IMessage {
    text: React.ReactNode
    type: "sent" | "received" // Restrictions of type ‘sent’ or ‘received’
    fileUrl?: string
    isImage?: boolean
  }

  const [messages, setMessages] = useState<IMessage[]>([
    { text: "Hi, how can I help you today?", type: "received" },
    { text: "Hey, I'm having trouble with my account.", type: "sent" },
    { text: "What seems to be the problem?", type: "received" },
    { text: "I can't log in.", type: "sent" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const { toast } = useToast()

  const handleSent = (message: string) => {
    toast({
      description: (
        <div className="w-[340px] rounded-md bg-slate-950 p-4 text-black">
          Message sent: {message}
        </div>
      ),
    })
  }

  const sendFiles = (files: File[]) => {
    const fileMessages: IMessage[] = files.map((file) => {
      const fileUrl = URL.createObjectURL(file)
      const isImage = file.type.startsWith("image/")
      const textContent = isImage ? (
        <img
          src={fileUrl}
          alt={`Thumbnail of ${file.name}`}
          className="max-w-[100px] max-h-[100px]"
        />
      ) : (
        <span className="underline text-white">{file.name}</span>
      )
      return {
        text: textContent,
        type: "sent",
        fileUrl,
        isImage,
      }
    })
    setMessages((prevMessages) => [...prevMessages, ...fileMessages])
    handleSent(`Sent files: ${files.map((file) => file.name).join(", ")}`)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : []
    sendFiles(files)
  }

  const messageStyles = {
    sent: "bg-black text-white rounded-lg p-3 my-2 break-words max-w-xs",
    received: "bg-gray-300 text-black rounded-lg p-3 my-2 break-words max-w-xs",
  }

  return (
    <>
      <Toaster />
      <Card
        className="w-full max-w-md bg-white rounded-lg shadow-sm overflow-hidden"
        style={{ width: "500px" }}
      >
        <CardHeader className="bg-gray-100 p-4 flex justify-between items-left">
          <div>
            <div className="font-bold">Sofia Davis</div>
            <div className="text-sm text-gray-500">m@example.com</div>
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
              <span className={messageStyles[message.type]}>
                {message.fileUrl ? (
                  <a
                    href={message.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    {message.text}
                  </a>
                ) : (
                  message.text
                )}
              </span>
            </div>
          ))}
          <form className="flex mt-2">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <Button
              variant="destructive"
              className="mr-2 p-1.5"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <span className="flex items-center gap-2">
                <Upload className="file-upload-icon" />
              </span>
            </Button>

            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border-gray-300 rounded-full p-2 mr-2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />

            <Button
              variant="destructive"
              disabled={!newMessage.trim()}
              className="mr-2 p-1.5"
              onClick={() => {
                if (newMessage.trim()) {
                  setMessages([...messages, { text: newMessage, type: "sent" }])
                  handleSent(newMessage)
                  setNewMessage("")
                }
              }}
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
