import React,{useContext} from 'react';
import {GlobalContext} from '../context/contextApi';

import Transaction from './Transaction'
function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return(
    <>
    <div >
    <ul className="list">
    {transactions.map(trans=>(<Transaction key={trans.id} transaction={trans} />))}
    </ul>
    </div>

    </>
  );
}
export default TransactionList;
