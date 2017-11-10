import React, { Component } from 'react';

class PurchaseProgress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inProgress: false
    }
  }

  render() {
    let animationTime = 5;
    return (
      <div className="purchase-progress" onClick={() => this.setState({inProgress: true})}>
        <span>1:04</span>
        <div
          style={{transition: 'width ' + this.props.timeToComplete + 's linear' }}
          className={"progress-so-far " + (this.state.inProgress ? 'in-progress' : '')} />
      </div>
    );
  }
}

export default PurchaseProgress;
