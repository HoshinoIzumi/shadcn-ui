import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import { Button } from "@/registry/default/ui/button"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function AccordionButton() {
  const { toast } = useToast()
  const buttonText = "Normal Show Toast"
  const handleClick = (url: any) => () => {
    window.open(url, "_blank")
  }
  const windowClick = (message: any) => () => {
    alert(message)
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "600px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <div style={{ width: "500px", backgroundColor: "rgb(255, 255, 255)" }}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I enrol?</AccordionTrigger>
            <AccordionContent>
              Once you're ready, enrol online by logging in to Sydney Student.
              Go to "My studies" then "Enrolment" and you're set to go. There
              are several sections to complete as part of your enrolment. You
              can log out and return later if you need to.
              <br></br>
              <Toaster />
              <Button
                style={{
                  backgroundColor: "rgb(249, 115, 22)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                variant="outline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({
                    description: "Button click.",
                  })
                }}
              >
                Enrol now
              </Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Your responsibilities and privacy
            </AccordionTrigger>
            <AccordionContent>
              Your enrolment comes with certain conditions so it's important to
              understand them. You should also familiarise yourself with our
              privacy policy regarding the personal information you supply
              during enrolment.
              <br></br>
              <Toaster />
              <Button
                style={{
                  backgroundColor: "rgb(249, 115, 22)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                variant="outline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({
                    description: "Button click.",
                  })
                }}
              >
                Learn more
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
