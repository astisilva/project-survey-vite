

import React from 'react'

export const Color = ({ value, updateFormData }) => {
  const favoriteColor = (e) => updateFormData("favoriteColor", e.target.value);
  return (
    <div>

      <label>Favorite Color:</label>
      <select value={value} onChange={favoriteColor}>
        <option value="">Select a Color</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="purple">Purple</option>
        <option value="red">Red</option>
      </select>
    </div>
  )
}
