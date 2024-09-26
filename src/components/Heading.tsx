import React from 'react'
interface HeadingProps {
    title: string;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
const Heading = ({title,setOpen}:HeadingProps) => {
  return (
    <h2 className='heading'>
      <svg onClick={()=>setOpen?.(prev=>!prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      <span>{title}</span>
    </h2>
  )
}

export default Heading
