import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 700, bounceDamping: 10 }} className="w-60 h-72 relative bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden">
        <FaRegFilePdf />
        <p className='mt-5 text-xs leading-right font-semibold'>{data.desc}</p>
        <div className="footer w-full bottom-0 absolute  left-0 ">
            <div className="flex justify-between align-center items-center py-3 px-8 mb-2">
                <h5 className="text-sm font-semibold">{data.fileSize}</h5>
                <span className = "h-6 w-6 rounded-full bg-slate-700 flex items-center justify center text-white px-1">
                    {data.close ? <MdOutlineFileDownload /> : <IoClose />}
                </span>  
            </div>
            {data.tag.isOpen &&  <div className={`w-full bottom-1 py-3 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex text-center justify-center`}>
                <h4 className='text-sm font-semibold '>Download Now.</h4>
            </div> }
           
        </div>
    </motion.div>
  )
}

export default Card