import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

export default class ExpenseList extends Component {
    
  render() {
    return (
        // <React.Fragment> 감싸는 div를 굳이 만들지 않고 사용할 수 있다. 글씨는 생략가능 
      <>
        <ul className='list'>
          {this.props.initialExpenses.map(expense => {
            return (
              <ExpenseItem key={expense.id} expense={expense}
                handleDelete={this.props.handleDelete}
              />
            )
          })}
      
        </ul>
        <button className='btn'>
            목록 지우기
        </button>
      </>
    )       
  }
}
