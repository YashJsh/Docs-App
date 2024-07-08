import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc : "Hey this is the first card in the list",
            fileSize : "0.9mb",
            close: false,
            tag:{
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc : "Hey this is the second card in the list",
            fileSize : "1mb",
            close: false,
            tag:{
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc : "Hey this is the third card in the list",
            fileSize : "0.5mb",
            close: true,
            tag:{
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc : "Hey this is the fourth card in the list",
            fileSize : "0.2mb",
            close: true,
            tag:{
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc : "Hey this is the fifth card in the list",
            fileSize : "0.2mb",
            close: false,
            tag:{
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        
    ]

  return (
    <div ref={ref} className="m-4 fixed flex gap-4 h-screen w-full z-[3]">
        {
            data.map((item,index) => ((
                <Card data={item} reference = {ref}/>
            )))
        }
    </div>
  );
}

export default Foreground;
