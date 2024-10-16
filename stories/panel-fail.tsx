import React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

export default function FailPanel() {
  return (
    <Card style={{ width: "350px", backgroundColor: "white" }}>
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-center font-semibold">
          Application Failed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-center mb-4">
          Please try again
        </CardDescription>

        <CardDescription
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "semi-bold",
          }}
        >
          <Button className="text-center mb-4">Back</Button>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
