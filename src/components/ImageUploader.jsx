import { useState, useRef } from 'react'
import './ImageUploader.css'

const ImageUploader = ({ onImageUpload, uploadedImage, isAnalyzing }) => {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('image/')) {
        onImageUpload(file)
      }
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      onImageUpload(file)
    }
  }

  const onButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleRemoveImage = () => {
    onImageUpload(null)
  }

  return (
    <div className="image-uploader">
      {!uploadedImage ? (
        <div
          className={`upload-area ${dragActive ? 'drag-active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="upload-content">
            <div className="upload-icon">📸</div>
            <h3>Upload Food Photo</h3>
            <p>Drag and drop your food image here, or click to browse</p>
            <button 
              className="upload-button"
              onClick={onButtonClick}
            >
              Choose Image
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        <div className="image-preview">
          <div className="preview-header">
            <h3>📸 Uploaded Image</h3>
            {!isAnalyzing && (
              <button 
                className="remove-button"
                onClick={handleRemoveImage}
              >
                ✕
              </button>
            )}
          </div>
          <div className="preview-container">
            <img 
              src={URL.createObjectURL(uploadedImage)} 
              alt="Uploaded food" 
              className="preview-image"
            />
            {isAnalyzing && (
              <div className="analyzing-overlay">
                <div className="spinner"></div>
                <p>Analyzing your food...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageUploader
