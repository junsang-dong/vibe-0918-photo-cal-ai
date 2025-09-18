# 🍎 Cal AI - Food Calorie Tracker

AI-powered web application that analyzes food photos and provides detailed nutritional information using Google's Gemini AI.

## ✨ Features

- 📸 **Image Upload**: Drag & drop or click to upload food photos
- 🤖 **AI Analysis**: Powered by Google Gemini AI for accurate food recognition
- 📊 **Nutrition Facts**: Detailed breakdown of calories, protein, carbs, fat, and more
- 🏥 **Health Score**: AI-generated health rating (1-10)
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🎨 **Modern UI**: Beautiful gradient design inspired by Cal AI app

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vibe-0918-photo-cal-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Get your Gemini API key:
- Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
- Create a new API key
- Copy and paste it into your `.env.local` file

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **AI**: Google Gemini AI (gemini-1.5-flash)
- **Styling**: CSS3 with modern features
- **Package Manager**: npm

## 📱 Usage

1. **Upload Photo**: Click "Choose Image" or drag & drop a food photo
2. **AI Analysis**: Wait for Gemini AI to analyze your food
3. **View Results**: See detailed nutrition facts, health score, and ingredients
4. **Track Progress**: Use the information to make informed dietary choices

## 🎯 Supported Features

- Food recognition and identification
- Calorie estimation
- Macronutrient breakdown (protein, carbs, fat)
- Micronutrient information (fiber, sugar)
- Ingredient identification
- Allergen detection
- Meal type classification
- Health scoring

## 🔧 Configuration

The app uses the following environment variables:

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using React and Gemini AI