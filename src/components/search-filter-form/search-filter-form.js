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
          className="search-input"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.onUpdateSearchPanel}/>
          <div className='search-blocks'>Or filter</div>
          <button className='filter-button start'>Brazil</button>
          <button className='filter-button middle'>Kenya</button>
          <button className='filter-button end'>Columbia</button>
      </div>      
    )
  } 
}

export default SearchFilterPanel;
