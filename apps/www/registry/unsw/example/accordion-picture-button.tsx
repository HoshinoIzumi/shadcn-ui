import React, { useState } from "react"
import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import { Button } from "@/registry/default/ui/button"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function AccordionPictureButton() {
  const { toast } = useToast()
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const imageStyle = isZoomed
    ? "w-full cursor-zoom-out"
    : "w-1/2 cursor-zoom-in"

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
            <AccordionContent className="flex flex-col items-center">
              <div className={imageStyle} onClick={handleImageClick}>
                <Image
                  src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"
                  alt="Description"
                  width={500}
                  height={400}
                  layout="responsive"
                />
              </div>
              <br />
              Once you're ready, enrol online by logging in to Sydney Student.
              Go to "My studies" then "Enrolment" and you're set to go. There
              are several sections to complete as part of your enrolment. You
              can log out and return later if you need to.
              <br />
              <Toaster />
              <Button
                className="my-4 cursor-pointer rounded-md bg-orange-500 px-4 py-2 text-white"
                variant="outline"
                onClick={() => {
                  toast({
                    description: "Button click.",
                  })
                }}
              >
                Learn more
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Your responsibilities and privacy
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center">
              <div className={imageStyle} onClick={handleImageClick}>
                <Image
                  src="/accordionusyd1.jpg"
                  alt="Description"
                  width={500}
                  height={400}
                  layout="responsive"
                />
              </div>
              <br />
              Your enrolment comes with certain conditions so it's important to
              understand them. You should also familiarise yourself with our
              privacy policy regarding the personal information you supply
              during enrolment.
              <br />
              <Toaster />
              <Button
                className="my-4 cursor-pointer rounded-md bg-orange-500 px-4 py-2 text-white"
                variant="outline"
                onClick={() => {
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
