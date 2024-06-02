import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatNumberToWon } from '../utils'

const Remaining = () => {

  const { expenses, budget } = useContext(AppContext)

  const totlaExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0);

  const alertType = totlaExpenses > budget ? 'alert-danger' : 'alert-success'
  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>
        남은 돈 :  {formatNumberToWon(budget - totlaExpenses)}
      </span>
    </div>
  )
}

export default Remaining