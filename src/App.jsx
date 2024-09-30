import { useState } from 'react'
import all_countries from './mocks/all_countries.json'
import { LangSelect } from './components/LangSelect'
import { Flag } from './components/Flag'
import { InfoGame } from './components/InfoGame'
import './App.css'

function App() {
  const MAX = 20
  const [lang, setLang] = useState('es')

  const [countries, setCountries] = useState([])
  const [orderGuess, setOrderGuess] = useState([])

  const [guessed, setGuessed] = useState(0)
  const [tried, setTried] = useState(0)

  const randomNumber = (max, length) => {
    let numbers = [];
      while (numbers.length < length) {
        const number = Math.floor(Math.random() * max);
        if (!numbers.includes(number)) {
          numbers.push(number); 
      }
    }
    return numbers;
  }

  const newGame = () => { 
    const numbers = randomNumber(all_countries.length, MAX)
    const flags = numbers.map((number) => all_countries[number])
    setGuessed(0)
    setTried(0)
    setOrderGuess(Array.from({ length: MAX }, (_, i) => i).sort(() => Math.random() - 0.5))
    setCountries(flags)
  }

  const validar = (resp) => { 
    if(resp){
      setGuessed(guessed + 1)
    }else{
      setTried(tried + 1)
    }
  }

  const flagName = () => {
    if(guessed >= MAX) return 'Fin del juego'
    let country = countries[orderGuess[guessed]]
    return lang == 'en' ? country.name : country.translations[lang]
  }

  return (
    <div className='page'>
      <header>
        <h1>Banderas</h1>
      < LangSelect setLang = {setLang} />
        <button onClick={newGame}>Nuevo Juego</button>
      </header>
      <main>
        { countries.length > 0 &&
          <InfoGame 
            guessed = {guessed}
            max = {MAX}
            tried = {tried}
            countryName = {flagName()}
          />
        }
        
        <div className='flags-content'>
          {
            countries.map(country => (
              <Flag 
                key = {country.numericCode}
                country = {country}
                wantedCountry = {countries[orderGuess[guessed]]?.numericCode}
                validar = {validar}
                />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default App
