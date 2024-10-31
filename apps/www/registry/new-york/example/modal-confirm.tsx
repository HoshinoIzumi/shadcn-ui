import React from "react"

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
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function ConfirmModal() {
  const { toast } = useToast()
  return (
    <>
      <Toaster />
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
            Are you sure you want to submit your application? You will not be
            able to make changes after that.
          </DialogDescription>
          <DialogFooter className="mt-4 flex justify-center space-x-4">
            <Button
              variant="default"
              onClick={() => {
                toast({ description: "Message has been sent." })
              }}
            >
              Confirm
            </Button>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
