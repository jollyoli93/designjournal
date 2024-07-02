
function SidebarList() {
    const topics = ["Design", "Product", "Software Eng",
        "Customer Success", "Leadership", "Management"];
    
    const componentList = topics.map((topic, index) =>
        <li key={index}>{topic}</li>
    )

    return(
        <ul>
            {componentList}
        </ul>
    );
}

export default function Sidebar() {
    return(
        <div className="w-[20vw] border-2 border-black">
          <bold className="font-bold" >View all</bold>
          <SidebarList />
        </div>
    )
}


