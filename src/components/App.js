import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Title from "./Title";
import "../styles/main.scss";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: term, per_page: 20 },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <Title />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
