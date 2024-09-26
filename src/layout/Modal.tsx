import React, { useState } from 'react'
import Heading from '../components/Heading'
import SegmentForm from '../components/SegmentForm'
import Select from '../components/Select'
import BottomSection from './BottomSection'
interface ModalProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ErrorObject {
  inputError:string;
  selectError: string;
}
export type ValueData = Record<string,string>
const options = [
  {Label:"First Name",Value: "first_name"},
  {Label:"Last Name",Value: "last_name"},
  {Label:"Gender",Value: "gender"},
  {Label:"Age",Value: "age"},
  {Label:"Account Name",Value: "account_name"},
  {Label:"City",Value: "city"},
  {Label:"State",Value: "state"}
]
const Modal = ({setOpen}:ModalProps) => {
  const [inputData,setInputData] = useState('');
  const [valuesList,setValuesList] = useState<ValueData[]>([]);
  const [error,setError] = useState<ErrorObject>({inputError:'',selectError:''});
  return (
    <div className='modal'>
      <div className='content'>
        <Heading setOpen={setOpen} title='Saving Segment'/>
        <SegmentForm error={error} setError={setError} setInputData={setInputData} inputData={inputData} />
        {valuesList.map((value:ValueData,index)=>{
          return <Select error={error} setError={setError} key={index} defaultValue={value} index={index} options={options} withAddButton={false} setValuesList={setValuesList}  />
        })}
        <Select error={error} setError={setError} options={options} withAddButton={true} setValuesList={setValuesList}  />
        <BottomSection setError={setError} valuesList={valuesList} inputData={inputData} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default Modal
