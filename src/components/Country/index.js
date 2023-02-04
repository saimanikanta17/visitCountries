import './index.css'

const Country = props => {
  const {country, changeCountriesList} = props
  const {name, isVisited} = country
  const clickBtn = () => {
    changeCountriesList({...country, isVisited: true})
  }

  return (
    <li className="country-item">
      <p>{name}</p>
      {!isVisited ? (
        <button type="button" onClick={clickBtn} className="visit-btn">
          Visit
        </button>
      ) : (
        <p className="visited">Visited</p>
      )}
    </li>
  )
}

export default Country
