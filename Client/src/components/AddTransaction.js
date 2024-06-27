import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onsubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
    setText('')
    setAmount(0);


  }
  return (



    <div>
      <h3>Add new Trasaction</h3>
      <form onSubmit={onsubmit} className="addTransaction">
        <label >Text</label>
        <input className="text" type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text...' ></input>

        <label>Amount <br></br> (negative-expense, positive-income)</label>
        <input className="Amount" type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount...' ></input>
        <button className='submitbutton' type="submit" >Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
