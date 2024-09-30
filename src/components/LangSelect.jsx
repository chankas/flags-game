export const LangSelect = ({setLang}) => {
  const langs = { 
    es: 'Español', 
    en: 'Inglés', 
    fr: 'Francés',
    br: 'Portugues (Brasil)',
    pt: 'Portugues (Portugal)',
    nl: 'Holandés',
    hr: 'Croata',
    fa: 'Persa',
    de: 'Alemán',
    ja: 'Japonés',
    it: 'Italiano',
    hu: 'Húngaro'
  
  
  }

  const selectLang = (event) => { 
    setLang(event.target.value) 
  }
  return (  
      <select onChange ={ selectLang } >
        { 
          Object.keys(langs).map((key) => (
            <option key={key} value={key}>
              {langs[key]}
            </option>
          )
        )}
      </select>
  )
}