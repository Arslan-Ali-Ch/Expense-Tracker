import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/contextApi';
function AddTransaction() {
let {AddTransaction}=useContext(GlobalContext);
  let [text,settext]=useState('');
  let [amount,setamount]=useState("");
  function submit(e){
    e.preventDefault();
    console.log("i am type of amount",typeof amountnum)
    let newtransaction={
      id:Math.floor(Math.random()*100000),
      text,
      amount: +parseInt(amount)
    };
AddTransaction(newtransaction);
settext("");
setamount("");
  }
  return(
    <>
    <h3>Add new transition</h3>
    <form onSubmit={submit}>
    <div className="form">
    <label htmlFor="text">Text</label>
    <input type="text" placeholder="Enter Discription"
    value={text} onChange={(e)=>{settext(e.target.value)}}/>

    <label htmlFor="amount">Amount</label>
    <input type="number" placeholder="Enter Amount"
    value={amount} onChange={(e)=>{setamount(e.target.value)}}/>

    </div>
    <button className="btn">Add transaction</button>
    </form>
    </>
  ) ;
}
export default AddTransaction;
