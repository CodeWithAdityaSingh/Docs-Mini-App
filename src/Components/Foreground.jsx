import React, { useRef } from 'react'
import Cards from './Cards'




function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae?",
      filesize : "9MB",
      close : true,
      tag : {isopen : true,tagtitle : "Download Now ", tagcolor : "green"}

    },
    {
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae?",
      filesize : "9MB",
      close : true,
      tag : {isopen : true,tagtitle : "Download Now ", tagcolor : "blue"}

    },
    {
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae?",
      filesize : "9MB",
      close : false,
      tag : {isopen : false ,tagtitle : "Upload ", tagcolor : "green"}

    }
  ]
  
  return (
    <>
     <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap m-10'>
      {data.map((item,index)=>(
        
        <Cards data = {item} refrence = {ref}/>
      ))}
     </div>
    </>
  )
}

export default Foreground