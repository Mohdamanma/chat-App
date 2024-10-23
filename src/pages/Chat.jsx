import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import ChatBox from '../components/ChatBox'
import RightSideBar from '../components/RightSideBar'

function Chat() {
  return (
    <div className="flex justify-center items-center   bg-gradient-to-b from-[#596AFF] to-[#383699] h-screen">
      <div className='w-11/12  h-3/4 max-w-[1000px] grid grid-cols-[1fr_2fr_1fr]  bg-slate-200 '>
    <LeftSideBar/>
    <ChatBox/>
    <RightSideBar/>
      </div>
    </div>
  )
}

export default Chat