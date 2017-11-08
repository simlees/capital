import GeneralStore from 'general-store';
import dispatcher from '../dispatcher';
import investmentTypes from '../config/investmentTypes';

const investments = investmentTypes.map(investmentType => {
  return {
    ...investmentType,
    quantity: 0
  }
});

function purchaseInvestment(id, quantity) {
  let type = investments.find(i => i.id === id);
  type.quantity += quantity;
}

const InvestmentStore = GeneralStore.define()
  .defineGet(function() {
    return investments;
  })
  .defineResponseTo('PURCHASE_INVESTMENT', function(data) {
    purchaseInvestment(data.id, data.quantity);
    // buy it! investment.id investment.quantity
  })
  .register(dispatcher);

export default InvestmentStore;
