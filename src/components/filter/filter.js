import './filter.css'

const Filter = (props) => {

  const buttonsData = [
    {name: 'start', label: 'Brazil'},
    {name: 'middle', label: 'Kenya'},
    {name: 'end', label: 'Columbia'}

  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'start' : ''
    return (
      <button 
          onClick={() => props.onFilterSelect(name)}
          className={`btn ${clazz}`}
          type='button'
          key={name}>
              {label}
      </button>
    )
  })

  return (
    <div className='filter-button'>
      {buttons}
    </div>
  )
}


export default Filter;

// <button className='filter-button start'>Brazil</button>
//           <button className='filter-button middle'>Kenya</button>
//           <button className='filter-button end'>Columbia</button>