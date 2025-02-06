'use client'
import { SendMsIcon, SmileFaceIcon } from '@/utils/icons';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Picker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    {ssr: false}
)

const MessageInput = () => {
    const [inputMessage, setinputMessage] = useState<string>("");
    const [showEmojie, setshowEmojie] = useState<boolean>(false);

    function onEmojiClick(emojiObject: {emoji:string}){
        setinputMessage(pre => pre + emojiObject.emoji)
    }

    function handleSubmit(e: {preventDefault: () => void; }){
        e.preventDefault();
        setinputMessage("");
        setshowEmojie(false);
    }
  return (
    <form className='mt-auto relative mx-0' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input 
                type="text" 
                className='input w-full pl-14 input-bordered bg-slate-100 text-gray-800' 
                placeholder='Message'
                value={inputMessage}
                onChange={(e) => setinputMessage(e.target.value)}
            />
        </div>
        <button 
            type='button' 
            className='absolute top-1/2 left-5 -translate-y-1/2 text-gray-800 transition-transform duration-200 hover:scale-105'
            onClick={() => setshowEmojie(!showEmojie)}
        >
            <SmileFaceIcon/>
        </button>
        <button type='submit' className='absolute top-1/2 right-5 -translate-y-1/2 text-gray-800 transition-transform duration-200 hover:scale-105'>
            <SendMsIcon/>
        </button>
        {showEmojie && (
            <div className='absolute bottom-full'>
                <Picker onEmojiClick={onEmojiClick}/>
            </div>
        )}
    </form>
  )
}

export default MessageInput