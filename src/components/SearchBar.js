import React from "react";
import { BsSearch } from "react-icons/bs";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search_container">
        <form
          onSubmit={this.onFormSubmit}
          className="search_container__form"
          role="search"
        >
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autoFocus
            required
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
