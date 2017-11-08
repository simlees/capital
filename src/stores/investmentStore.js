import GeneralStore from 'general-store';
import dispatcher from '../dispatcher';
import investmentTypes from '../config/investmentTypes';

const investments = investmentTypes.map(investmentType => {
  return {
    ...investmentType,
    quantity: 0
  }
})

const InvestmentStore = GeneralStore.define()
  .defineGet(function() {
    return investments;
  })
  .defineResponseTo('PURCHASE_INVESTMENT', function(investment) {
    console.log('purchasing...');
    // buy it! investment.id investment.quantity
  })
  .register(dispatcher);

export default InvestmentStore;
