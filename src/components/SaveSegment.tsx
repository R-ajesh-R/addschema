import React from 'react'
interface SaveSegmentProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SaveSegment = ({setOpen}:SaveSegmentProps) => {
  return (
    <div className='wrapper'>
      <button onClick={()=>setOpen(prev=>!prev)}>Save Segment</button>
    </div>
  )
}

export default SaveSegment
