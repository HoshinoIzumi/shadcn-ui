import * as React from "react"
import Image from "next/image"

// Only if you're using Next.js

import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

import checkMarkIcon from "./check-mark.png"

// Ensure this is the correct path

export function EnquirySubmittedCard() {
  return (
    <Card className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden p-4 text-center flex flex-col items-center justify-center">
      <div className="flex justify-center items-center w-full">
        {/* Replace 'img' with 'Image' if using Next.js */}
        <Image
          src={checkMarkIcon}
          alt="Checkmark"
          width={50} // Set the size of your image accordingly
          height={50} // Set the size of your image accordingly
        />
      </div>
      <CardTitle className="text-lg font-semibold my-2 mt-4">
        Enquiry Submitted
      </CardTitle>
      <CardContent className="mb-4 mt-4">
        <p className="text-sm">
          Thank you for your enquiry. We will get back to
          <br /> you as soon as we can.
        </p>
      </CardContent>
      <Button className="py-2 px-4 mt-2">Return to Page</Button>
    </Card>
  )
}

export default EnquirySubmittedCard
