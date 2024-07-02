import content from "./content.js"
import { Fragment } from "react";
import Image from 'next/image';



export default function Contents () {
    function ListContent () {
        return content.map(item => (
        <div key={item.key}>{
            <Fragment>
                <Image src={item.url} width={200} height={50} alt=""/>
                <h2>{item.heading}</h2>
                <p>{item.body}</p>
            </Fragment>
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