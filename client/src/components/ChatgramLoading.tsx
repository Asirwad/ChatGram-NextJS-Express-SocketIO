'use client'
import React from 'react'
import Lottie from 'lottie-react';
import loader from "@/assets/Telegram.json";
const ChatgramLoading = () => {
  return (
    <Lottie animationData={loader} loop={true}/>
  )
}

export default ChatgramLoading