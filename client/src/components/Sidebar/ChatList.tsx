import { fetchUsers } from '@/lib/fetchers';
import { useAllUsers } from '@/store/userStore';
import { userProps } from '@/types'
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow';
import ChatItem from './ChatItem';

const ChatList = ({mySelf}: {mySelf: userProps}) => {
    const { users, setUsers } = useAllUsers(
        (state: any) => ({
            users: state.users,
            setUsers: state.setUsers
        }), shallow
    );
    useEffect(() => {
        fetchUsers(mySelf, setUsers);
        console.log(mySelf);
    }, [])
  return (
    <ul className='my-5 flex flex-col'>
        {
            users ? (
                users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user} />)
            ): (
                <span className='loading loading-ring w-16'></span>
            )
        }
    </ul>
  )
}

export default ChatList