import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"
import { toast } from "@/registry/default/ui/use-toast"

export default function FileUploadImage() {
  const [selectedFileName, setSelectedFileName] = useState("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type.startsWith("image/")) {
        setSelectedFileName(event.target.files[0].name)
      } else {
        // If it is not an image type, use the toast function to display an error message
        toast({
          title: "Error",
          description: "Please select an image file!",
          duration: 3000,
        })
        setSelectedFileName("")
      }
    }
  }

  return (
    <div className="image-upload-wrapper">
      <label htmlFor="image-upload" className="image-upload-label">
        Please upload an image:
      </label>
      <input
        type="file"
        id="image-upload"
        onChange={handleFileChange}
        className="image-upload-input"
        style={{ display: "none" }}
        accept="image/*"
      />
      <div className="image-upload-control">
        <label htmlFor="image-upload" className="cursor-pointer">
          <Button asChild variant="outline" size="default">
            <span>Choose File</span>
          </Button>
        </label>
        <span className="image-file-name px-3">
          {selectedFileName || "No file chosen"}
        </span>
      </div>
    </div>
  )
}
