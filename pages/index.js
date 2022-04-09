import Sidebar from "../components/Sidebar"
import Feed from "../components/Home/Feed"
import Widgets from "../components/Widgets"


const style = {
  wrapper: `flex justify-center h-auto w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1500px] flex justify-between`
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

