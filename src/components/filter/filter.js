import './filter.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const Filter = (props) => {
  const buttonsData = [
    {name: 'start', label: 'Brazil'},
    {name: 'middle', label: 'Kenya'},
    {name: 'end', label: 'Columbia'}

  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'active' : ''
    return (
      <Button onClick={() => props.onFilterSelect(name)}
          className={`btn ${clazz} filter-button`}
          type='button'
          key={name}>
            {label}
      </Button>
    )
  })

  return (
    <ButtonGroup className="mb-2 filter">
      {buttons}
    </ButtonGroup>
  )
}

export default Filter;
