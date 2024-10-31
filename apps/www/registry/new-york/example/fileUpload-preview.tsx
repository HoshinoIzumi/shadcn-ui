import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"

export default function FileUploadPreview() {
  const [selectedFileName, setSelectedFileName] = useState<string>("")
  const [previewSrc, setPreviewSrc] = useState<string>("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setSelectedFileName(file.name)

      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedFileName("")
      setPreviewSrc("")
    }
  }

  return (
    <div className="image-upload-wrapper">
      <label htmlFor="image-upload2" className="image-upload-label">
        Please upload an image:
      </label>
      <input
        type="file"
        id="image-upload2"
        onChange={handleFileChange}
        className="image-upload-input"
        style={{ display: "none" }}
        accept="image/*"
      />
      <div className="image-upload-control">
        <label htmlFor="image-upload2" className="cursor-pointer">
          <Button asChild variant="outline" size="default">
            <span>Choose File</span>
          </Button>
        </label>
        <span className="file-name px-3">
          {selectedFileName || "No file chosen"}
        </span>
      </div>
      {previewSrc && (
        <div className="image-preview">
          <img
            src={previewSrc}
            alt="Image preview"
            className="image-preview-img"
          />
        </div>
      )}
    </div>
  )
}
