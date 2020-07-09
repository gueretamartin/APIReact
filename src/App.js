import React from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import "bootswatch/dist/darkly/bootstrap.min.css";

class App extends React.Component {
  state = {
    inputText: "",
    imagenes: [],
    page: "",
  };
  scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth", "start");
  };
  readApi = () => {
    const inputText = this.state.inputText;
    const page = this.state.page;
    const urlx = `https://pixabay.com/api/?key=17409878-887b0cfa0b68209bdccdf78fd&q=${inputText}&per_page=50&page=${page}`;

    //console.log(urlx);

    fetch(urlx)
      .then((response) => response.json())
      .then((response) => this.setState({ imagenes: response.hits }));
  };

  getInputText = (inputText) => {
    this.setState(
      {
        inputText,
        page: 1,
      },
      () => {
        this.readApi();
      }
    );
  };

  prev = () => {
    // Read state page
    let page = this.state.page;
    if (page === 1) return null;
    // Rest one page
    page -= 1;
    // Write State
    this.setState({ page }, () => {
      this.readApi();
      this.scroll();
    });
    // console.log(this.state.page);
  };

  next = () => {
    // Read state page
    let page = this.state.page;
    // Rest one page
    page += 1;
    // Write State
    this.setState({ page }, () => {
      this.readApi();
      this.scroll();
    });
    //  console.log(this.state.page);
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image Search Engine</p>
          <Search getInputText={this.getInputText} />
        </div>
        <div className="row justify-content-center">
          <Result
            imagenes={this.state.imagenes}
            prev={this.prev}
            next={this.next}
          />
        </div>
      </div>
    );
  }
}
export default App;
