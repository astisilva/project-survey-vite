import React from 'react'
import './style.css';

export const Band = ({ value, updateFormData }) => {
  const favoriteBand = (e) => updateFormData('favoriteBand', e.target.value)
  return (


    <div>
    <label>Favorite Band: </label>
    <form>
      <div>
        <input
          type="radio"
          name="band"
          value="Nirvana"
          checked={value === 'Nirvana'}
          onChange={favoriteBand}
        />
        <label htmlFor="nirvana">Nirvana</label>
      </div>

      <div>
        <input
          type="radio"
          name="band"
          value="Metallica"
          checked={value === 'Metallica'}
          onChange={favoriteBand}
        />
        <label htmlFor="metallica">Metallica</label>
      </div>

      <div>
        <input
          type="radio"
          name="band"
          value="Red Hot Chili Peppers"
          checked={value === 'Red Hot Chili Peppers'}
          onChange={favoriteBand}
        />
        <label htmlFor="rhcp">Red Hot Chili Peppers</label>
      </div>
    </form>
  </div>

  )
}
