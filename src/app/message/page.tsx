'use client'

import { useState } from "react"
export default function Message(){
const [message, setMessage] = useState('')
const [post, setPost] = useState('')

    function textHendler(e){
        setMessage((prev) => prev = e.target.value)
    }
    function clickMessage(){
        let mm = message
        setPost(prev => prev += ' ' + mm )
        setMessage(prev => prev = '')
    }

    return(
        <div className="flex flex-col justify-between box-border w-full">
            <div className="text-white p-[30px]">
                {post}
            </div>
            <div className="flex m-[10px]">
                <input className="w-full h-[40px] text-black rounded-md p-[10px]" 
                    placeholder="Напиши сообщение" 
                    type='text' 
                    value={message} 
                    onChange={(e)=>textHendler(e)}></input>
                <button className="mx-[10px] bg-red-300 rounded-md font-serif text-blue-950" onClick={clickMessage} >Отправить</button>
            </div>
        </div>
    )
}