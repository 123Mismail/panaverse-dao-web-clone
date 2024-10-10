
"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
const TypeWriter = () => {
  return (
    <div>
            <Typewriter
                     options={{
                       strings: ['certified web3.O', ' and metaverse developer'],
                       autoStart: true,
                       loop: true,
                     }}
                   />
    </div>
  )
}

export default TypeWriter