import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"
import { toast } from "@/registry/default/ui/use-toast"

export default function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState("")


  const triggerFileInputClick = () => {
    const fileInput = document.getElementById("file-upload")
    if (fileInput) {
      fileInput.click() // Trigger click if the element exists
    }
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    
    if (file) {
      if (formatControl && !allowedFormats.includes(file.type)) {
        alert(`Invalid file format. Please upload a ${allowedFormats.join(' or ')} file.`);
        setSelectedFile("");
      } else {
        setSelectedFile(file.name);
      }
    } else {
      setSelectedFile("");
    }
  };
  

  return (
    <div className="file-upload-wrapper">
      <div className="file-upload-content">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="file-upload-input"
          style={{ display: "none" }} // Hide the default input
        />
        <div className="file-upload-control">
          <Button
            asChild
            variant="outline"
            size="default"
            onClick={triggerFileInputClick} // Use the trigger function with null check
          >
            <span>Choose File</span>
          </Button>
          <span className="file-name px-3">
            {selectedFile || "No file chosen"}
          </span>
        </div>
      </div>
      {selectedFile && (
        <div className="file-display-container mt-4">
          <Button variant="default">Upload File</Button>
        </div>
      )}
    </div>
  )
}


