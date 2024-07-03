import HeroBar from "./components/Hero/HeroBar"
import Sidebar from "./components/Sidebar/Sidebar"
import Contents from "./components/Contents/Contents"

export default function Home() {

  return(
    <> 
      <HeroBar />
      <div className="py-5 border-2 flex flex-grow">
        <Sidebar />
        <Contents />
      </div>
    </>
  )
}