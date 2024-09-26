import React from 'react'
import { ErrorObject } from '../layout/Modal';
interface InputProps {
    placeholder: string;
    setInputData: React.Dispatch<React.SetStateAction<string>>;
    inputData: string;
    error: ErrorObject;
    setError: React.Dispatch<React.SetStateAction<ErrorObject>>;
}
const handleRef = (element:HTMLInputElement) => {
    if(element){
        element.focus();
    }
}
const Input = (props:InputProps) => {
  return (
    <div className='input-wrapper'>
      <input ref={handleRef} value={props.inputData} onChange={(e)=>{props.setError((prev:ErrorObject)=>{return {...prev,inputError:''}});props.setInputData(e.target.value)}} type='text' placeholder={props.placeholder} />
      {props.error.inputError !== '' && <p style={{color:'red'}}>{props.error.inputError}</p>}
    </div>
  )
}

export default Input
