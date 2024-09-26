import React, {useState} from 'react'
import Heading from '../components/Heading'
import SaveSegment from '../components/SaveSegment'
import Modal from './Modal'

const Main = () => {
  const [open,setOpen] = useState<boolean>(false)
  return (
    <main>
      <Heading title="View Audience" />
      <SaveSegment setOpen={setOpen} />
      {open && <Modal setOpen={setOpen}/>}
    </main>
  )
}

export default Main
