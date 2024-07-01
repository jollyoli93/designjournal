
function SidebarList() {
    const topics = ["Design", "Product", "Software Engineering",
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
        <>
          <bold className="font-bold" >View all</bold>
          <SidebarList />
        </>
    )
}