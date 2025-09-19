import { useState } from 'react'
import './App.css'
import ImageUploader from './components/ImageUploader'
import NutritionResults from './components/NutritionResults'
import { analyzeFoodWithGemini } from './services/geminiService'

function App() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState(null)
  const [apiKey, setApiKey] = useState('')
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)

  const handleImageUpload = async (file) => {
    setError(null)
    setAnalysisResult(null)
    setUploadedImage(file)
    
    if (file) {
      if (!apiKey) {
        setError('Please enter your Gemini API key first')
        setShowApiKeyInput(true)
        return
      }
      
      setIsAnalyzing(true)
      try {
        const result = await analyzeFoodWithGemini(file, apiKey)
        setAnalysisResult(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsAnalyzing(false)
      }
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">🍎 Cal AI</h1>
          <p className="app-subtitle">Track your calories with just a picture</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {!apiKey && (
            <div className="api-key-section">
              <div className="api-key-card">
                <h3>🔑 API Key Required</h3>
                <p>Please enter your Gemini API key to start analyzing food images.</p>
                <div className="api-key-input-group">
                  <input
                    type="password"
                    placeholder="Enter your Gemini API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="api-key-input"
                  />
                  <button 
                    className="api-key-button"
                    onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                  >
                    {showApiKeyInput ? 'Hide' : 'Show'}
                  </button>
                </div>
                <p className="api-key-help">
                  Get your API key from{' '}
                  <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
                    Google AI Studio
                  </a>
                </p>
              </div>
            </div>
          )}
          
          <ImageUploader 
            onImageUpload={handleImageUpload}
            uploadedImage={uploadedImage}
            isAnalyzing={isAnalyzing}
          />
          
          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
            </div>
          )}
          
          {analysisResult && (
            <NutritionResults 
              result={analysisResult}
              image={uploadedImage}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Powered by Gemini AI</p>
      </footer>
    </div>
  )
}

export default App
