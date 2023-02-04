import './index.css'

const VisitedCountries = props => {
  const {country, changeCountriesList} = props
  const {name, imageUrl} = country
  const clickBtn = () => {
    changeCountriesList({...country, isVisited: false})
  }

  return (
    <li className="visited-country">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="card">
        <p>{name}</p>
        <button type="button" onClick={clickBtn} className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
