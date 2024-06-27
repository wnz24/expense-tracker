import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from "./Transaction.js"

const History = () => {

  const { transaction, getTransaction } = useContext(GlobalContext);
  useEffect(() => {
    getTransaction();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />
        ))}

      </ul>
    </div>
  )
}

export default History
