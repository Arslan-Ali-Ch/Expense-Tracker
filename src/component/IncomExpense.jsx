import React,{useContext} from 'react';
import {GlobalContext} from '../context/contextApi';

function moneyformatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}
function IncomExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    );
  return(
    <>
    <div className="incomexpense">
    <div>
    <h4>Income</h4>
    <h5 className="money plus">{moneyformatter(income)}</h5>
    </div>
    <div>
    <h4>Expense</h4>
    <h5 className="money minus">{moneyformatter(expense)}</h5>
    </div>
    </div>
    </>
  );
}
export default IncomExpense;
