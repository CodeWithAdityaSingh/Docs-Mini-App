import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { GoDownload } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({data,refrence}) {
  return (
    <>
      <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className=" relative box-border text-white my-5 px-8 py-10 h-80 w-60 bg-zinc-900/90 rounded-[40px] overflow-hidden">
        <LuFileSpreadsheet />
        <p className=" leading-tight text-sm mt-3 font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute bottom-0 h-25 w-full left-0 ">
          <div className="flex  content-center justify-around mb-5">
            <h5>{data.filesize}</h5>
            <span className="h-7 w-7 rounded-full bg-zinc-700 flex items-center justify-center">
              {data.close ? <IoCloseCircleOutline /> :  <GoDownload size=".7em" color="#fff" />}
             
            </span>
          </div>
          {data.tag.isopen ?(
            <div className = {`w-full  ${data.tag.tagcolor === "blue" ? "bg-sky-600" : "bg-green-600"} py-2 flex justify-center`} >
            <h3 className="font-sm font-semibold">{data.tag.tagtitle}</h3>
          </div> 
          ) : null }
        </div>
      </motion.div>
    </>
  );
}

export default Cards;
