import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

export function CardWithNormal() {
  return (
    <Card className="w-[350px] bg-white rounded-lg shadow-sm overflow-hidden">
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-sm mb-4">
          Submit a partnership enquiry or make a donation by contacting the
          University revenue team.
        </CardDescription>
        <Button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-700 text-white">
          Explore more →
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardWithNormal
