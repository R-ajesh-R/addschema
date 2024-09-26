import React from 'react'
interface OutputTextProp {
    text: string;
}
const OutputText = ({text}:OutputTextProp) => {
  return (
    <p className='outputtext'>
      {text}
    </p>
  )
}

export default OutputText
