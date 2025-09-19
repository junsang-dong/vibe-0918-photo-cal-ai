import { GoogleGenerativeAI } from '@google/generative-ai'

// Gemini API 키 - 사용자가 직접 입력하도록 변경 (보안 강화)
let genAI = null

const initializeGemini = (apiKey) => {
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    throw new Error('Please provide a valid Gemini API key')
  }
  genAI = new GoogleGenerativeAI(apiKey)
}

// 파일을 base64로 변환하는 함수
const fileToGenerativePart = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const base64String = reader.result.split(',')[1] // data:image/jpeg;base64, 부분 제거
      resolve({
        inlineData: {
          data: base64String,
          mimeType: file.type,
        },
      })
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export const analyzeFoodWithGemini = async (imageFile, apiKey) => {
  try {
    if (!genAI) {
      initializeGemini(apiKey)
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    
    const imagePart = await fileToGenerativePart(imageFile)
    
    const prompt = `
    Analyze this food image and provide detailed nutritional information in the following JSON format:
    
    {
      "foodName": "Name of the food/dish",
      "description": "Brief description of what you see",
      "calories": number (estimated calories),
      "protein": number (grams of protein),
      "carbs": number (grams of carbohydrates),
      "fat": number (grams of fat),
      "fiber": number (grams of fiber),
      "sugar": number (grams of sugar),
      "servingSize": "Estimated serving size description",
      "healthScore": number (1-10, where 10 is healthiest),
      "ingredients": ["list", "of", "main", "ingredients"],
      "allergens": ["list", "of", "potential", "allergens"],
      "mealType": "breakfast|lunch|dinner|snack",
      "confidence": number (0-1, confidence level of the analysis)
    }
    
    Please be as accurate as possible with your estimates. Consider portion sizes, cooking methods, and visible ingredients. 
    If you cannot identify the food clearly, indicate this in the confidence score and provide your best estimate.
    
    Return ONLY the JSON object, no additional text.
    `

    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    const text = response.text()
    
    // JSON 파싱 시도
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const nutritionData = JSON.parse(jsonMatch[0])
        return nutritionData
      } else {
        throw new Error('No valid JSON found in response')
      }
    } catch (parseError) {
      console.error('Failed to parse JSON response:', text)
      throw new Error('Failed to parse nutrition analysis results')
    }
    
  } catch (error) {
    console.error('Gemini API Error:', error)
    throw new Error(`Failed to analyze food image: ${error.message}`)
  }
}

// Mock 데이터 (API 키가 없을 때 사용)
export const getMockNutritionData = () => {
  return {
    foodName: "Sample Food",
    description: "This is a sample response when API key is not configured",
    calories: 350,
    protein: 15,
    carbs: 45,
    fat: 12,
    fiber: 5,
    sugar: 8,
    servingSize: "1 serving",
    healthScore: 7,
    ingredients: ["sample ingredient 1", "sample ingredient 2"],
    allergens: ["none detected"],
    mealType: "lunch",
    confidence: 0.5
  }
}
