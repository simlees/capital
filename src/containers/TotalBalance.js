import React, { Component } from 'react';
// import { InvestmentStore } from './../stores';

class TotalBalance extends Component {

  constructor(props) {
    super(props)
    this.state = {
      totalBalance: 100
    }
  }

  render() {
    return (
      <div className="total-balance">
        £{this.state.totalBalance}
      </div>
    );
  }
}

export default Investments;
