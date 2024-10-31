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
} from "@/registry/sydney/ui/dialog"
import { Toaster } from "@/registry/sydney/ui/toaster"
import { useToast } from "@/registry/sydney/ui/use-toast"

export default function PictureModal() {
  const { toast } = useToast()

  return (
    <>
      <Toaster />
      <Dialog>
        <DialogTrigger asChild>
          <Button 
          variant="outline"
          className="bg-orange-600 hover:bg-orange-700 text-white"
          >
          Open Model</Button>
        </DialogTrigger>
        <DialogContent
          style={{ backgroundColor: "white" }}
          className="rounded-md p-6"
        >
          <DialogHeader>
            <DialogTitle>About personal information</DialogTitle>
          </DialogHeader>

          <img
            src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"
            alt="University building"
            className="rounded-md"
          />
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
              className="bg-usydOrange hover:bg-usydOrangeDark text-white"
              onClick={() => {
                toast({ description: "Already Accepted." })
              }}
            >
              Accept
            </Button>
            <DialogClose asChild>
              <Button variant="secondary">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
