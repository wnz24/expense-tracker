import React, { useContext } from 'react'
import {GlobalContext} from "../context/GlobalState"

const IncomeExpense = () => {
  const {transaction } = useContext(GlobalContext)
  const amounts = transaction.map(transaction => transaction.amount)

  const income = amounts.filter(item => item > 0).reduce((acc,item)=>(acc+= item),0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc,item)=>(acc+= item),0)*-1).toFixed(2);
  return (
    <div className='inc-exp'>
      <div className="income">Income <span>${income}</span></div>
      <div className="expense">Expense<span>${expense}</span></div>
    </div>
  )
}

export default IncomeExpense
