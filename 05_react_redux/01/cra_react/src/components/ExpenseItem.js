import React, { Component } from 'react'
import'./ExpenseItem.css'
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'

export default class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'></span>
            <span className='amount'> 원 </span>
        </div>
        <div>
            <button className='edit-btn'>
                <MdEdit />
            </button>
            <button className='clear-btn'>
                <MdDelete />
            </button>
        </div>
      </li>
    )
  }
}
