import React, { useState } from 'react'
import { ErrorObject, ValueData } from '../layout/Modal';
interface SelectProps {
    options: Options[];
    withAddButton: boolean;
    setValuesList: React.Dispatch<React.SetStateAction<ValueData[]>>;
    defaultValue?: ValueData;
    index?: number;
    error: ErrorObject;
    setError: React.Dispatch<React.SetStateAction<ErrorObject>>;
}
type Option = {
  "First Name": string;
  "Last Name": string;
  Gender: string;
  Age: string;
  "Account Name": string;
  City: string;
  State: string;
};
const valueoptions:Option = {
  "First Name":"first_name",
  "Last Name":"last_name",
  "Gender":"gender",
  "Age":"age",
  "Account Name": "account_name",
  "City": "city",
  "State": "state"
}
interface Options {
    Value: string;
    Label: string;
}
const handleAddSchema = (value:string,setError:React.Dispatch<React.SetStateAction<ErrorObject>>,setValuesList:React.Dispatch<React.SetStateAction<ValueData[]>>,setValue:React.Dispatch<React.SetStateAction<string>>,label:string) =>{
  const val = Object.values(value);
  if(!val[0]){
        return setError((prev:ErrorObject)=>{return {...prev,selectError:'Please select a valid option'}});
    }
    setValuesList(prev=>{
        let val:string,index:number;
        Object.values(valueoptions).forEach((el,idx)=>{
          if(el===value)
            index=idx
        });
        val = Object.keys(valueoptions)[index!]
        return [...prev,{[value]:val}]
    });
    setValue('');
}
function getOption(option:Option,val:ValueData|''){
  if(!val)
    return val
  const value = Object.values(val)[0] as keyof Option;
  return option[value];
}
const handleChange = (e: React.ChangeEvent<HTMLSelectElement>,setError:React.Dispatch<React.SetStateAction<ErrorObject>>,setValuesList:React.Dispatch<React.SetStateAction<ValueData[]>>,setValue:React.Dispatch<React.SetStateAction<string>>,error:ErrorObject,withAddButton:boolean,index:number|undefined) => {
    error && setError((prev:ErrorObject)=>{return {...prev,selectError:''}});
    setValue(e.target.value);
    if(!withAddButton){
        let val:string,indexHere:number;
        Object.values(valueoptions).forEach((el,idx)=>{
          if(el===e.target.value)
            indexHere=idx
        });
        val = Object.keys(valueoptions)[indexHere!]
        setValuesList(prev=>{
            const newVal = prev.map((value,idx)=>index===idx ? {[e.target.value]:val} : value);
            console.log(newVal)
            return newVal;
    })
    }
}
const Select = ({options,defaultValue,setValuesList,withAddButton,index,error,setError}:SelectProps) => {
  const [value,setValue] = useState<string>(getOption(valueoptions,defaultValue||''));
  return (
    <div className='select-wrapper'>
      <select value={value} onChange={(e)=>handleChange(e,setError,setValuesList,setValue,error,withAddButton,index)}>
        <option value="" disabled>Add Schema to Segment</option>
        {options.map((option,optionIndex)=><option key={optionIndex} value={option.Value}>{option.Label}</option>)}
      </select>
      {withAddButton && 
      <button type='button' onClick={()=>{setError(prev=>{return {...prev,selectError:''}});handleAddSchema(value,setError,setValuesList,setValue,value)}} className='add-button'>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </span>
        Add New Schema
      </button>}
      {error.selectError !== '' && <p style={{color:'red'}}>{error.selectError}</p>}
    </div>
  )
}

export default Select
