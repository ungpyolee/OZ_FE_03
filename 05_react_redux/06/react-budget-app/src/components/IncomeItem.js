import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { TiDelete } from "react-icons/ti";

const IncomeItem = ({id, name, amount}) => {

  const handleDeleteIncome = () => {
    dispatch({
      type: 'DELETE_INCOME',
      payload: id
    })
  }

  const { dispatch } = useContext(AppContext);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
    {name}
    <div>
      <span className="badge bg-success me-3">{amount}</span>
      <TiDelete onClick={handleDeleteIncome} size={"1.5em"} />
    </div>
  </li>
  )
}

export default IncomeItem