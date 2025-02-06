'use client'
import React from 'react'
import TopBar from './TopBar'
import { useSelectedUser } from '@/store/userStore'
import MessageList from './MessageList'

const Messages = () => {
    const selectedUser = useSelectedUser((state) => state.selectedUser);
  return (
    <div className='bg-image messages w-full min-h-screen z-0 hidden md:w-1/2 lg:w-2/3 md:flex md:flex-col flex-col'>
        {/** TOPBAR */}
        <TopBar selectedUser={selectedUser}/>
        <div className={`maxw-sm md:max-w-3xl w-full mx-auto mb-10 ${selectedUser ? "" : "md:hidden"}`}>
            {/** MESSAGES LIST */}
            <MessageList />
            {/** MESSAGE INPUT */}
        </div>
    </div>
  )
}

export default Messages