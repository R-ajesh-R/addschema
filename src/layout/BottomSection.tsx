import React from 'react'
import { ErrorObject, ValueData } from './Modal';
import axios from 'axios';
interface BottomSectionProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    valuesList: ValueData[];
    inputData: string;
    setError: React.Dispatch<React.SetStateAction<ErrorObject>>;
}
const AxiosInstance = axios.create({
    baseURL:'https://webhook.site/fe3a089a-5f7e-4b19-9b0b-f8e74bee5b15',
    withCredentials: true
})
const handleSubmit = async(valuesList:ValueData[],inputData:string,setError:React.Dispatch<React.SetStateAction<ErrorObject>>) =>{
    if(!inputData){
        return setError(prev=>{return {...prev,inputError:'Please fill this value'}})
    }else if(valuesList.length===0){
        return setError(prev=>{return {...prev,selectError:'Please fill this value'}})
    }
    const response = await AxiosInstance.post("/",{
        "segment_name": inputData,
        "schema": valuesList
    }); //getting CORS error.
    console.log(response)
}
const BottomSection = ({setOpen,valuesList,inputData,setError}:BottomSectionProps) => {
  return (
    <div className='bottom-section'>
        <button onClick={()=>handleSubmit(valuesList,inputData,setError)} className='create-button'>Save The Segment</button>
        <button onClick={()=>setOpen(prev=>!prev)} className='cancel'>Cancel</button>
    </div>
  )
}

export default BottomSection
