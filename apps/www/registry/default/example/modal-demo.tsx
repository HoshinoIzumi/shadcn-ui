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

export default function NormalModal() {
  const { toast } = useToast()
  return (
    <>
      <Toaster />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Model</Button>
        </DialogTrigger>
        <DialogContent
          style={{ backgroundColor: "white" }}
          className="p-6 rounded-md"
        >
          <DialogHeader>
            <DialogTitle>About personal information</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Under NSW privacy laws, you have the right to request access to and
            correct any personal information concerning you held by the
            University.
            <br />
            <br />
            If you reside in, or are located in, the European Economic Area,
            under the GDPR, where your information is collected, used or
            disclosed as a result of your express consent, you may withdraw that
            consent at any time. Further, you may have the right to request the
            erasure, portability or restriction of processing of their personal
            information, and, to object to the processing of your personal
            information.
            <br />
            <br />
            Information about requesting access to or amending your information
            can be found on the Accessing University information page.
          </DialogDescription>
          <DialogFooter>
            <Button
              variant="default"
              onClick={() => {
                toast({ description: "Already Accepted." })
              }}
            >
              Accept
            </Button>
            <DialogClose asChild>
              <Button variant="secondary">Decline</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
