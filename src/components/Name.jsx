import React from 'react'
import '../styles/style.css';

export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData('name', e.target.value)
  return (
    <div>
      <label for='firstname'>Name: </label>
      <input id='firstname' aria-labelledby="firstname" type='text' value={value} onChange={userName} />
    </div>
  )
}
