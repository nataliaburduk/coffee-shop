import { Component } from 'react';
import './search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
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
        <div>{this.props.label}</div>
        <input 
          type="search"
          className="search-input"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.onUpdateSearchPanel}/>  
      </div>      
    )
  } 
}

export default Search;
