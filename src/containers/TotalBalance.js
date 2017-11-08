import React, { Component } from 'react';
import { BalanceStore } from './../stores';

class TotalBalance extends Component {

  constructor(props) {
    super(props)
    this.state = {
      totalBalance: BalanceStore.get()
    }
  }

  componentWillMount() {
    this.balanceSubscription = BalanceStore.addOnChange(() => {
      console.log('balance change', BalanceStore.get())
      this.setState({
        totalBalance: BalanceStore.get()
      });
    });
  }

  componentWillUnmount() {
    this.balanceSubscription.remove();
  }

  render() {
    return (
      <div className="total-balance">
        £{this.state.totalBalance}
      </div>
    );
  }
}

export default TotalBalance;
