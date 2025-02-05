'use client'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { handleSubmit } from '@/lib/fetchers';
import { useRouter } from 'next/navigation';

const Form = () => {
    // pulling avatar from public folder due to ssl restrictions
    //const [avatarId, setavatarId] = useState((Math.random() * 20).toFixed());
    const [avatarId, setavatarId] = useState<number>(1);
    const router = useRouter();
  return (
    <form onSubmit={(e)=> handleSubmit(e, router)} className='flex flex-col gap-5 p-5 shadow-lg hover:shadow-xl'>
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
        <button className='btn btn-primary'>Login</button>
    </form>
  )
}

export default Form