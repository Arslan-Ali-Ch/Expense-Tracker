import React,{useContext} from 'react';
import {GlobalContext} from '../context/contextApi';

function moneyformatter(number){
  let p=number.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
      {  console.log("ac",acc);
        console.log("it",num);
}
        return num === '-' ? acc : num+ (i && !(i % 3) ? ',' : '') +acc;
      }, '') +
    '.' +
    p[1]
  );
}

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce(function(acc, item){
  return item =acc+item;
  }, 0);

  return(
    <>
    <h3>Total Balance</h3>
    <span>{moneyformatter(total)}</span>

    </>
  );
}
export default Balance;
