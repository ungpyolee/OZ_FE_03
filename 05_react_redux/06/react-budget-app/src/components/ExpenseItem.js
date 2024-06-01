import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../contexts/AppContext'

const ExpenseItem = ({id, name, cost}) => {

  const { dispatch } =useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type : 'DELETE_EXPENSE',
      payload : id
    })
  }

  console.log(cost)
  return (
    <li
      className='list-group-item d-flex justify-content-between align-items-center'
    >
      {name}
      <div>
        <span
          className='badge bg-secondary me-3'
        >{cost}</span>
        <TiDelete 
          onClick={handleDeleteExpense}
          size={'1.5rem'}
        />
      </div>
    </li>
  )
}

export default ExpenseItem