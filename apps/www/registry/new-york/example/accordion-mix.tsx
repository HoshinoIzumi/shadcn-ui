/* eslint-disable tailwindcss/classnames-order */
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

export default function AccordionMix() {
  const { toast } = useToast()
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const imageStyle = isZoomed
    ? "w-full cursor-zoom-out"
    : "w-1/2 cursor-zoom-in"

  return (
    <div className="flex items-center justify-center w-[600px] bg-white">
      <div className="w-[500px] bg-white">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I enrol?</AccordionTrigger>
            <AccordionContent className="flex flex-col items-center">
              <div className={imageStyle} onClick={handleImageClick}>
                <Image
                  src="/accordion/usyd1.jpg" // 使用相对于 public 目录的路径
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
              Faculty's responsibilities to enrolment
            </AccordionTrigger>
            <AccordionContent>
              The University and its faculties are committed to providing a safe
              and healthy environment for its students, staff, and visitors. To
              support this commitment, the University has developed a set of
              policies and procedures to ensure that all students are aware of
              their responsibilities and obligations, as well as their rights
              and entitlements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Your responsibilities and privacy
            </AccordionTrigger>
            <AccordionContent>
              Your enrolment comes with certain conditions, so it's important to
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
