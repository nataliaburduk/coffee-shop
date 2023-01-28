import './country-filter.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const CountryFilter = (props) => {
  const countries = ['Brazil', 'Kenya', 'Columbia'];

  const buttons = countries.map((country) => {
    const active = props.filter === country;
    const clazz = active ? 'active' : ''
    return (
      <Button onClick={() => props.onFilterSelect(country)}
          className={`btn ${clazz} filter-button`}
          type='button'
          key={country}>
            {country}
      </Button>
    )
  })

  return (
    <ButtonGroup className="mb-2 filter">
      {buttons}
    </ButtonGroup>
  )
}

export default CountryFilter;
