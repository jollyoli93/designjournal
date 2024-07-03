import HeroBar from "./components/Hero/HeroBar"
import Sidebar from "./components/Sidebar/Sidebar"
import Contents from "./components/Contents/Contents"

export default function Home() {

  return(
    <> 
      <HeroBar />
      <div className="border-2 flex h-screen">
        <Sidebar />
        <Contents />
      </div>
    </>
  )
}