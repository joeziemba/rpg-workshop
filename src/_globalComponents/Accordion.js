import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    }

    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="accordion">
        <h3
          onClick={this.toggleAccordion}
          className="accordion__button form-header"
        >
          {this.props.title}
        </h3>

        <div
          className={`accordion__inner collapse ${
            this.state.open ? "accordion__inner--show" : ""
          }`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Accordion;