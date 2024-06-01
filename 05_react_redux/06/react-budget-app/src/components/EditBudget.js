import React, { useState } from 'react'
import styled from 'styled-components';

const EditBudget = ({budget, setIsEditing, dispatch}) => {

  const [value, setValue] = useState(budget)

  const handleSaveClick = (value) => {
    dispatch({
      type : 'SET_BUDGET',
      payload : value
    })
    setIsEditing(false);
  }
  return (
    <>
     <input
      required
      type='number'
      className='form-control me-3'
      id='name'
      value={value}
      onChange={(e) => setValue(e.target.value)}
     />
     <Button
      type='button'
      className='btn btn-primary '
      onClick={() => handleSaveClick(value)}>
        수정
      </Button>
    </>
  )
}

const Button = styled.button`
  white-space : nowrap;
`

export default EditBudget