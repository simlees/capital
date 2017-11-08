import React, { Component } from 'react';
import { InvestmentStore } from './../stores';
import { Currency } from './Currency';
import { purchaseInvestment, collectProfit } from './../actions/investmentActions'

class Investment extends Component {

  render() {
    return (
      <div className="investment">
        <button onClick={() => collectProfit(this.props.id, this.props.quantity * this.props.profit) }>
          Collect
        </button>
        {this.props.name} ({this.props.quantity})
        <button onClick={() => purchaseInvestment(this.props.id, this.props.price) }>
          Buy (<Currency amount={this.props.price}/>)
        </button>
      </div>
    );
  }
}

export default Investment;
