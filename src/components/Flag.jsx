import React, { useState } from 'react'
import check from '../assets/check.png'


export const Flag = ({country, wantedCountry, validar}) => {
  const [guess, setGuess] = useState(false)
  const checkGuess = () => {
    if(!guess){
      if (wantedCountry === country.numericCode){
        setGuess(true)
        validar(true)
      }else{
        validar(false)
      }
    }
  }
  return (
    <div className="flag-item">
      <img
        className='flag'
        src={country.flags.png} 
        alt={country.numericCode} 
        onClick={checkGuess}
      />
      {guess &&
        <img 
          className='check' 
          src={check} alt='check' 
        />
      }
    </div>
  )
}
