
function SidebarList() {
    const topics = ["Design", "Product", "Software Eng",
        "Customer Success", "Leadership", "Management"];
    
    const componentList = topics.map((topic, index) =>
        <li key={index}>{topic}</li>
    )

    return(
        <ul className="mt-1">
            {componentList}
        </ul>
    );
}

export default function Sidebar() {
    return(
        <div className="w-[20vw] hidden md:block pt-10 border-2 border-black">
          <bold className="font-bold" >View all</bold>
          <SidebarList />
        </div>
    )
}


