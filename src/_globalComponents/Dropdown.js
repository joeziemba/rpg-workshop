import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // renderItems() {
  //   return this.props.options.map((option) => {
  //     return <li onClick={(option) => }>{option.text}</li>
  //   })
  // }

  render() {
    return (
      <div className="c-dropdown">
        {/* {this.props.render(this.state)} */}
        <button>{this.props.buttonText}</button>
        <ul>{this.renderItems()}</ul>
      </div>
    );
  }
}

export default Dropdown;
