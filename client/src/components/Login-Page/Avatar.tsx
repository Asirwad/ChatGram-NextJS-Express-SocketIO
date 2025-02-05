'use client'
import Image from 'next/image'
import React from 'react'

const Avatar = ({avatarId, setavatarId}: {
    avatarId: number,
    setavatarId: (id: number) => void
}) => {
  return (
    <div
        onClick={() => setavatarId((avatarId+1)%5)} 
        className='avatar cursor-pointer mx-auto mb-5 tooltip' 
        data-tip="Click to generate avatar"
    >
        <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <Image 
                src={`/robohash/${avatarId}.png`}
                alt='avatar'
                height={256}
                width={256}
            />
        </div>
    </div>
  )
}

export default Avatar