
import './App.css';
import React from 'react';
import Balance  from './component/Balance';
import Header  from './component/Header';
import AddTransaction  from './component/AddTransaction';
import IncomExpense  from './component/IncomExpense';
import TransactionList  from './component/TransactionList';
import {GlobalProvider} from './context/contextApi';
function App() {
  return (
    <GlobalProvider>
    <div className="main">
    <Header/>
    <Balance/>
    <IncomExpense/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
