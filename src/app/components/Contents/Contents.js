import content from "./content.js"
// import { Fragment } from "react";
import Image from 'next/image';



export default function Contents () {
    function ListContent () {
        return content.map(item => (
        <div key={item.key}>{
            <div className="flex flex-col md:flex-row lg:flex-row">
                <Image src={item.url} width={200} height={50} alt=""/> 
                <div>
                    <h2 className="font-black md:text-xl lg:text-2xl">{item.heading}</h2>
                    <p>{item.body}</p>
                </div>
            </div>
            }
        </div>
    ))
    }
    return (
        <div className="flex-1 border-2 border-black">
            {ListContent()}
        </div>
    )
}