import { Component } from 'react';
import './search-filter-form.css'

class SearchFilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearchPanel = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return(
      <div className="search-container">
        <div>Looking for</div>
        <input 
          type="text"
          className="form-control search-input"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.onUpdateSearchPanel}/>
          <div className='search-blocks'>Or filter</div>
          <button className='filter-button'>Brazil</button>
          <button className='filter-button'>Kenya</button>
          <button className='filter-button'>Columbia</button>
      </div>      
    )
  } 
}

export default SearchFilterPanel;


//   render() {
//     const buttonsData = [
//       {name: 'all', label: 'All employees'},
//       {name: 'like', label: 'Promotion'},
//       {name: 'moreThan1000', label: 'Salary more than 1000$'},
//       {name: 'premia', label: 'Reward'},
//     ];
//     const buttons = buttonsData.map(({name, label}) => {
//     const active = props.filter === name;
//     const clazz = active ? 'btn-light' : 'btn-outline-light'

//     return (
//       <>
//       <input 
//           type="text"
//           className="form-control search-input"
//           placeholder="Find an employee"
//           value={this.state.term}
//           onChange={this.onUpdateSearchPanel}/>

//           <button 
//           onClick={() => props.onFilterSelect(name)}
//           className={`btn ${clazz}`}
//           type='button'
//           key={name}>
//               {label}
//       </button>
//       </>
//     )
//     }
  
//   return (
//     <div className='btn-group'>
//       {buttons}
//     </div>
//   )
// }
