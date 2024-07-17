'use client'

import { useState } from "react"

// function SidebarList() {

//     const componentList = topics.map((topic, index) =>
//         <li key={index}>{topic}</li>
//     )

//     return(
//         <ul className="mt-1">
//             {componentList}
//         </ul>
//     );
// }

export default function Sidebar() {
    const [state, setState] = useState(false)
    console.log(state)
        const topics = ["Design", "Product", "Software Eng",
        "Customer Success", "Leadership", "Management"];
    
    return(
        <div className="w-[35vw] absolute">
            <h2 onClick={() => setState( prevState => !prevState) } className="font-bold hover:tracking-wide active:bg-slate-50">View All</h2>
            {state && 
                <div className="w- bg-white bg-opacity-60 rounded-lg flex flex-col">
                    {topics.map((items, i) =>
                        <h3 key={i} className="hover:bg-gray-50 active:bg-gray-100 ">{items}</h3>
                    )}
                </div>
            }
        </div>
    )
}


