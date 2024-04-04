import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new Trasaction</h3>
      <form className="addTransaction">
     <label >Text</label>
    <textarea className="text" >Add Text...</textarea>
   <label>Amount <br></br> (negative-expense, positive-income)</label>
    <textarea className="Amount" >Add Amount...</textarea>
    <button type="button" >Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
