import React from "react"

import { Avatar, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Label } from "@/registry/default/ui/label"

export default function SuccessPanel() {
  return (
    <Card style={{ width: "350px", backgroundColor: "white" }}>
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-center font-semibold">
          Application Complete
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-center mb-4">
          Your Reference Number: KDU3957KF
        </CardDescription>
      </CardContent>
    </Card>
  )
}
