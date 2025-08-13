import React, { useEffect, useState } from 'react'

const Chat = () => {
    const [chat, setChat] = useState([])
    useEffect(() => {
        const data = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_HOST_LINK}/suggest`);
                const main = await res.json();
                console.log(main);
              } catch (error) {
                console.log(error)
              }
        }
        data()
    })
  return (
    <div>
      chat app
    </div>
  )
}

export default Chat
