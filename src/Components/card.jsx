import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({data, referance}) => {
  return (
    <>
    <motion.div drag dragConstraints = {referance} whileDrag={{scale:1.1}} dragMomentum className="relative min-w-40 md:min-w-50 h-60 bg-zinc-900 rounded-4xl px-6 py-8 overflow-hidden">
        <FaRegFileAlt className='text-zinc-300'/>
        <p className='text-zinc-300 leading-none text-sm mt-4'>{data.description}</p>
        <div className='absolute bottom-0 left-0 text-zinc-300 w-full'>
        {data.close && <div className='w-[75%] mx-auto flex items-center justify-between py-4'>
            <p>{data.fileSize}</p>
            {data.download ? <IoCloseCircleSharp /> : <FaDownload/>}
        </div>}
        {data.tag.isOpen && (<div className= {`flex justify-center ${data.tag.tagColor} w-full py-3`}>
            <p className='font-semibold'>{data.tag.tagTitle}</p>
        </div>)}
        </div>
    </motion.div>
    </>
  )
}

export default Card