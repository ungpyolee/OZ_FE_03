import React, {forwardRef} from 'react'

const ChildComponent = (props, ref) => {
  return (
    <input ref={ref} />
  )
}

export default forwardRef(ChildComponent);