export const InfoGame = ({guessed, max, tried, countryName}) => {
  return (
    <>
      <h2>Llevas { guessed } de { max } intentos { tried }</h2>
      <h2>Cual es la bandera de  {countryName}</h2>
    </>
  )
}