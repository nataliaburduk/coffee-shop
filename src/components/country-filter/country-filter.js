import './country-filter.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const CountryFilter = ({filter, label, onFilterSelect}) => {
  const countries = ['Brazil', 'Kenya', 'Columbia'];

  const buttons = countries.map((country) => {
    const active = filter === country;
    const clazz = active ? 'active' : ''
    return (
      <Button onClick={() => onFilterSelect(country)}
          className={`btn ${clazz} filter-button`}
          type='button'
          key={country}>
            {country}
      </Button>
    )
  })

  return (
    <div className='filter-container'>
      <div>{label}</div>
      <ButtonGroup className="filter">
        {buttons}
      </ButtonGroup>
    </div>
  )
}

export default CountryFilter;
