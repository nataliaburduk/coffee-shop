import { useState } from "react";

import "./search.scss";

const Search = (props) => {
  const [term, setTerm] = useState('')

  const onUpdateSearchPanel = (e) => {
    const term = e.target.value;
    setTerm(term);
    props.onUpdateSearch(term);
  }

    return (
      <div className="search-container">
        <div>{props.label}</div>
        <input
          type="search"
          className="search-input"
          placeholder="start typing here..."
          value={term}
          onChange={onUpdateSearchPanel}
        />
      </div>
    )
}

export default Search;
