import HeroBar from "./components/Hero/HeroBar"
import Sidebar from "./components/Sidebar/Sidebar"

export default function Home() {
  console.log("Hello")
  let now = new Date()

  return(
    <> 
      <HeroBar />
      <Sidebar />
    </>
  )
}