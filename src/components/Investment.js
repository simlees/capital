import React, { Component } from 'react';
import { InvestmentStore } from './../stores';
import { Currency } from './Currency';
import { purchaseInvestment } from './../actions/investmentActions'

class Investment extends Component {

  render() {
    return (
      <div className="investment">
        {this.props.name}
        <button onClick={() => purchaseInvestment(this.props.code) }>
          <Currency amount={this.props.price}/>
        </button>
      </div>
    );
  }
}

export default Investment;
