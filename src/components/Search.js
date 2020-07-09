import React from "react";

class Search extends React.Component {

  searchRef = React.createRef();
  handle = (e) => {
        e.preventDefault();

        // Get Input value 
        const inputText = this.searchRef.current.value;

        // Send to principal Component (App)
        this.props.getInputText(inputText);
  }


  render() {
    return (
      <form onSubmit = {this.handle}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text" ref={this.searchRef}
              className="form-control form-control-lg"
              placeholder="Search Image. Example: Flowers"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block "
              value ="Search" 
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
