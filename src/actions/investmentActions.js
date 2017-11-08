import dispatcher from '../dispatcher';

export function purchaseInvestment(id, quantity = 1) {
  dispatcher.dispatch({
    actionType: 'PURCHASE_INVESTMENT',
    data: {
      id,
      quantity
    }
  });
}
