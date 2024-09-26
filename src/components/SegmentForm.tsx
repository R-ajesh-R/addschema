import React from 'react'
import OutputText from './OutputText'
import Input from './Input'
import { ErrorObject } from '../layout/Modal';
interface SegmentFormProps{
    setInputData: React.Dispatch<React.SetStateAction<string>>;
    inputData: string;
    error: ErrorObject;
    setError: React.Dispatch<React.SetStateAction<ErrorObject>>;
}
const SegmentForm = (props:SegmentFormProps) => {
  return (
    <div className='segment-section'>
      <OutputText text='Enter the Name of the segment' />
      <Input {...props} placeholder="Name of the segment" />
      <OutputText text='To save your segment, you need to add the schemas to build the query' />
    </div>
  )
}

export default SegmentForm
