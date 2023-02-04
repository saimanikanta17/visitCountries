const Country = props => {
  const {country, changeCountriesList} = props
  const {id, name, isVisited} = country
  const clickBtn = () => {
    changeCountriesList(id)
  }

  return (
    <li>
      <p>{name}</p>
      {isVisited ? (
        <button type="button" onClick={clickBtn}>
          Visit
        </button>
      ) : (
        <p>Visited</p>
      )}
    </li>
  )
}

export default Country
