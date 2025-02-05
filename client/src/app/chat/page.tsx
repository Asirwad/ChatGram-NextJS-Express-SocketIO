import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

const ChatPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto flex'>
        {/** SIDEBAR */}
        <Sidebar/>
        {/** MESSAGES */}
      </div>
    </div>
  )
}

export default ChatPage