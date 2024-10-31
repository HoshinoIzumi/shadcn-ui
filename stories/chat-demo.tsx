import React, { useState } from "react";
import { SendHorizontal } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import { Toaster } from "@/registry/default/ui/toaster";
import { useToast } from "@/registry/default/ui/use-toast";

type NormalChatProps = {
  bgColor?: string;
  fontColor?: string;
  receivedBgColor?: string;
  receivedFontColor?: string;
  borderColor?: string;
  messages: Array<{ text: string; type: "sent" | "received" }>;
  sendMessage: (message: string) => void;
};

const NormalChat: React.FC<NormalChatProps> = ({
  bgColor = "#1A1A1A",
  fontColor = "#FFFFFF",
  receivedBgColor = "#E4E4E7",
  receivedFontColor = "#111827",
  borderColor = "#0000FF",
  messages,
  sendMessage,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSent = () => {
    toast({
      description: (
        <div className="w-[340px] rounded-md bg-slate-950 p-4 text-black">
          The Message is: {newMessage}
        </div>
      ),
    });
  };

  const onSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    sendMessage(newMessage);
    handleSent();
    setNewMessage("");
  };

  const messageStyles = {
    sent: {
      backgroundColor: bgColor,
      color: fontColor,
      borderRadius: "10px",
      padding: "12px",
      margin: "5px 0",
      wordBreak: "break-word",
      maxWidth: "300px",
    },
    received: {
      backgroundColor: receivedBgColor,
      color: receivedFontColor,
      borderRadius: "10px",
      padding: "12px",
      margin: "5px 0",
      wordBreak: "break-word",
      maxWidth: "300px",
    },
  };

  return (
    <>
      <Toaster />
      <Card className="w-full max-w-md bg-white rounded-lg shadow-sm overflow-hidden" style={{ width: "500px" }}>
        <CardHeader className="bg-gray-100 p-4 flex justify-between items-left">
          <div>
            <div style={{ fontWeight: "bold" }}>Sofia Davis</div>
            <div style={{ fontSize: "0.875rem", color: "#999999" }}>m@example.com</div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}>
              <span style={messageStyles[message.type]}>{message.text}</span>
            </div>
          ))}
          <form className="flex mt-2" onSubmit={onSend}>
            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border-gray-300 rounded-full p-2 mr-2 focus:ring-2"
              style={{ "--tw-ring-color": borderColor } as React.CSSProperties}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              variant="destructive"
              disabled={!newMessage.trim()}
              style={{ marginRight: "8px", padding: "4px 6px" }}
              onClick={onSend}
            >
              <span className="flex items-center gap-2">
                <SendHorizontal className="sent-icon" />
              </span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default NormalChat;
