'use client'
import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import { handleSubmit } from '@/lib/fetchers';
import { useRouter } from 'next/navigation';
import {io} from 'socket.io-client';
import { useCookies } from 'react-cookie';

function Form()  {
    // pulling avatar from public folder due to ssl restrictions
    //const [avatarId, setavatarId] = useState((Math.random() * 20).toFixed());
    const [avatarId, setavatarId] = useState<number>(1);
    const router = useRouter();
    const socket = io("http://localhost:4000");
    const [cookie] = useCookies(["user"]);
    useEffect(() => {
        if(cookie.user) router.push("/chat");
    }, [cookie.user])
  return (
    <form onSubmit={(e)=> handleSubmit(e, router, avatarId, socket)} className='flex flex-col gap-5 p-5 shadow-lg hover:shadow-xl'>
        <Avatar avatarId={avatarId} setavatarId={setavatarId}/>
        <div className='flex flex-col xl:flex-row gap-5'>
            <div className='form-control w-full'>
                <label className='label'><span className='label-text text-lg'>What is your name?</span></label>
                <input type="text" placeholder='Username' className='input input-bordered w-full' required/>
            </div>
            <div className='form-control w-full'>
                <label className='label'><span className='label-text text-lg'>Put your email here</span></label>
                <input type="email" placeholder='Email' className='input input-bordered w-full' required/>
            </div>
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
    </form>
  )
}

export default Form