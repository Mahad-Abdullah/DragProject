import React from 'react'
import Card from './card'
import { useRef } from 'react'

const Foreground = () => {

  const ref = useRef(null)
  // description, speed, download, inProcess
  const data = [
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fileSize : ".9mb",
    close : true,
    download : false,
    tag : { isOpen : true, tagTitle: "Download Now", tagColor : "bg-green-600"},
  },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fileSize : ".9mb",
    close : true,
    download : true,
    tag : { isOpen : false, tagTitle: "Download Now", tagColor : "bg-green-600"},
  },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fileSize : ".9mb",
    close : false,
    download : false,
    tag : { isOpen : true, tagTitle: "In Progress", tagColor : "bg-blue-600"},
  },
    {
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    fileSize : ".9mb",
    close : true,
    download : false,
    tag : { isOpen : true, tagTitle: "Download Now", tagColor : "bg-green-600"},
  },
];

  return (
    <div ref={ref} className=' relative w-full h-screen z-50 p-5 flex flex-row gap-10'>
      {data.map((item, index) => (
      <Card data = {item} referance = {ref}/>
    ))}
    </div>
  )
}

export default Foreground