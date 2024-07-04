import content from "./content.js"
import Image from 'next/image';

// set contents block to render for each subject click
//      filter subjects


export default function Contents () {
    function ListContent () {
        return content.map((item, index) => (
            <div className="pt-10" key={item.key}>{
                <div className="px-2 gap-10 flex flex-col md:flex-row md:px-10 lg:flex-row items-center">
                    <Image 
                    src={item.url} 
                    width={350} 
                    height={50}
                    style={{
                        objectFit:"cover"
                        }}
                    sizes="100vw"
                    alt=""/> 
                    <div className="">
                        <h2 className="py-2 font-black md:text-xl lg:text-2xl">{item.heading}</h2>
                        <p className="text-base">{item.body}</p>
                    </div>
                </div>
                }
                {index < 1 && <hr className="border-black my-2 mx-10"/>}  
            </div>
        ))
    }
    return (
        <div className="flex-1">
            {ListContent()}
        </div>
    )
}