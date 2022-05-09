import React, { createContext, useReducer } from 'react';
import {reducerApi} from './reducerApi';

// Initial state
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
let [state,dispatch]=useReducer(reducerApi,initialState);
function AddTransaction(transaction){
  dispatch({
    type:'add',
    payload:transaction
  });
}
function deleteTransaction(id){
  dispatch({
    type:'delete',
    payload:id
  });
}

  return (<GlobalContext.Provider value={{
    transactions:state.transactions,
    AddTransaction,
    deleteTransaction
    }}   >
    {children}
  </GlobalContext.Provider>);
}
