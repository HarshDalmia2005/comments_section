import React from 'react'
import { useState } from 'react'
const Type = ({comment, setcomments}) => {
    const [input, setInput] = useState('')

    const handleComment=() => {
      const newcomment={
         id:Date.now(),
         user:"Harsh",
         content:input,
         replies:[]
      }

      setcomments([...comment,newcomment])
      setInput("")
    }
    
  return (
    <div className='flex mx-5 my-10 space-x-4'>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='comment anything...' className='p-2 rounded-2xl border border-black w-[80%]'/>
        <button onClick={handleComment} className='rounded-2xl p-2 bg-blue-800 text-white font-bold'>comment</button>
    </div>
  )
}

export default Type