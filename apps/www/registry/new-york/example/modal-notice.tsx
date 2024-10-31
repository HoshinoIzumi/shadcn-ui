import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"

export default function NoticeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Submit Application</Button>
      </DialogTrigger>
      <DialogContent
        style={{ backgroundColor: "white" }}
        className="rounded-md p-6"
      >
        <DialogHeader>
          <DialogTitle>Submit Application</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to submit your application? You will not be able
          to make changes after that.
        </DialogDescription>
        <DialogFooter className="mt-4 flex justify-center space-x-4">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
