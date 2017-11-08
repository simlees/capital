import GeneralStore from 'general-store';
import dispatcher from '../dispatcher';

let balance = 0;

const BalanceStore = GeneralStore.define()
  .defineGet(function() {
    return balance;
  })
  .defineResponseTo('PURCHASE_INVESTMENT', function(data) {
    balance -= data.cost;
  })
  .defineResponseTo('COLLECT_PROFIT', function(data) {
    balance += data.amount;
  })
  .register(dispatcher);

export default BalanceStore;
