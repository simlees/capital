import dispatcher from '../dispatcher';

export function purchaseInvestment(id, cost, quantity = 1) {
  dispatcher.dispatch({
    actionType: 'PURCHASE_INVESTMENT',
    data: {
      id,
      cost,
      quantity
    }
  });
}

export function collectProfit(id, amount) {
  dispatcher.dispatch({
    actionType: 'COLLECT_PROFIT',
    data: {
      id,
      amount
    }
  });
}
