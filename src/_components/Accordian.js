import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    }

    this.toggleAccordian = this.toggleAccordian.bind(this);
  }

  toggleAccordian() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="accordion" id="accordionExample">
        <h3 onClick={this.toggleAccordian} className="form-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {this.props.title}
        </h3>

        <div id="collapseOne" className={`accordionInner collapse ${this.state.open ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordionExample">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Accordian;