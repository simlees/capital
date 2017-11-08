import React, { Component } from 'react';
import { InvestmentStore } from './../stores';
import Investment from '../components/Investment';

class Investments extends Component {

  constructor(props) {
    super(props)
    this.state = {
      investments: InvestmentStore.get()
    }
  }

  componentWillMount() {
    this.investmentsSubscription = InvestmentStore.addOnChange(() => {
      this.setState({
        investments: InvestmentStore.get()
      });
    });
  }

  componentWillUnmount() {
    this.investmentsSubscription.remove();
  }

  render() {
    return (
      <div className="investments">
        {this.state.investments.map(investment =>
          <Investment
            key={investment.id}
            {...investment}/>
        )}
      </div>
    );
  }
}

export default Investments;
