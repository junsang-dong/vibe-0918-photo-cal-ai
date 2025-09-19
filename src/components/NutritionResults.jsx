import './NutritionResults.css'

const NutritionResults = ({ result, image }) => {
  if (!result) return null

  const getHealthScoreColor = (score) => {
    if (score >= 8) return '#4CAF50'
    if (score >= 6) return '#FF9800'
    return '#F44336'
  }

  const getMealTypeIcon = (mealType) => {
    switch (mealType?.toLowerCase()) {
      case 'breakfast': return '🌅'
      case 'lunch': return '🌞'
      case 'dinner': return '🌙'
      case 'snack': return '🍿'
      default: return '🍽️'
    }
  }

  return (
    <div className="nutrition-results">
      <div className="results-header">
        <h2>📊 Nutrition Analysis</h2>
        <div className="confidence-badge">
          Confidence: {Math.round((result.confidence || 0) * 100)}%
        </div>
      </div>

      <div className="results-content">
        {/* Food Info Card */}
        <div className="food-info-card">
          <div className="food-image-container">
            <img 
              src={URL.createObjectURL(image)} 
              alt={result.foodName} 
              className="food-image"
            />
            <div className="meal-type-badge">
              {getMealTypeIcon(result.mealType)} {result.mealType || 'Unknown'}
            </div>
          </div>
          
          <div className="food-details">
            <h3 className="food-name">{result.foodName || 'Unknown Food'}</h3>
            <p className="food-description">{result.description || 'No description available'}</p>
            <div className="serving-size">
              <strong>Serving Size:</strong> {result.servingSize || 'Not specified'}
            </div>
          </div>
        </div>

        {/* Health Score */}
        <div className="health-score-card">
          <div className="health-score-header">
            <h4>Health Score</h4>
            <span 
              className="health-score-number"
              style={{ color: getHealthScoreColor(result.healthScore) }}
            >
              {result.healthScore || 'N/A'}/10
            </span>
          </div>
          <div className="health-score-bar">
            <div 
              className="health-score-fill"
              style={{ 
                width: `${((result.healthScore || 0) / 10) * 100}%`,
                backgroundColor: getHealthScoreColor(result.healthScore)
              }}
            ></div>
          </div>
        </div>

        {/* Nutrition Facts */}
        <div className="nutrition-facts-card">
          <h4>Nutrition Facts</h4>
          <div className="nutrition-grid">
            <div className="nutrition-item calories">
              <div className="nutrition-icon">🔥</div>
              <div className="nutrition-details">
                <span className="nutrition-value">{result.calories || 'N/A'}</span>
                <span className="nutrition-unit">calories</span>
              </div>
            </div>
            
            <div className="nutrition-item protein">
              <div className="nutrition-icon">🥩</div>
              <div className="nutrition-details">
                <span className="nutrition-value">{result.protein || 'N/A'}</span>
                <span className="nutrition-unit">g protein</span>
              </div>
            </div>
            
            <div className="nutrition-item carbs">
              <div className="nutrition-icon">🌾</div>
              <div className="nutrition-details">
                <span className="nutrition-value">{result.carbs || 'N/A'}</span>
                <span className="nutrition-unit">g carbs</span>
              </div>
            </div>
            
            <div className="nutrition-item fat">
              <div className="nutrition-icon">🥑</div>
              <div className="nutrition-details">
                <span className="nutrition-value">{result.fat || 'N/A'}</span>
                <span className="nutrition-unit">g fat</span>
              </div>
            </div>
            
            {result.fiber && (
              <div className="nutrition-item fiber">
                <div className="nutrition-icon">🌿</div>
                <div className="nutrition-details">
                  <span className="nutrition-value">{result.fiber}</span>
                  <span className="nutrition-unit">g fiber</span>
                </div>
              </div>
            )}
            
            {result.sugar && (
              <div className="nutrition-item sugar">
                <div className="nutrition-icon">🍯</div>
                <div className="nutrition-details">
                  <span className="nutrition-value">{result.sugar}</span>
                  <span className="nutrition-unit">g sugar</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ingredients & Allergens */}
        {(result.ingredients || result.allergens) && (
          <div className="additional-info">
            {result.ingredients && result.ingredients.length > 0 && (
              <div className="ingredients-section">
                <h5>🥘 Ingredients</h5>
                <div className="ingredients-list">
                  {result.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {result.allergens && result.allergens.length > 0 && (
              <div className="allergens-section">
                <h5>⚠️ Potential Allergens</h5>
                <div className="allergens-list">
                  {result.allergens.map((allergen, index) => (
                    <span key={index} className="allergen-tag">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default NutritionResults
