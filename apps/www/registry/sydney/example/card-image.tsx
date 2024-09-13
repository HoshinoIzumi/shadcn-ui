import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

export function CardWithPicture() {
  const imageUrl =
    "https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"

  return (
    <Card className="max-w-md bg-white rounded-md shadow-sm overflow-hidden">
      <img
        src={imageUrl}
        alt="University Building"
        className="w-80 h-60 object-cover object-center"
      />
      <CardHeader className="bg-gray-100 p-3">
        <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <CardDescription className="text-sm mb-3">
          Submit a partnership enquiry, you can
          <br /> also make a donation by contacting
          <br /> the University revenue team.
        </CardDescription>
        <Button className=" w-full py-4 px-4">Explore more →</Button>
      </CardContent>
    </Card>
  )
}

export default CardWithPicture
