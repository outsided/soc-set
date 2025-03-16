'use client'
import { useState } from "react"
import {forType} from '@/app/message/fotype'


export default function Chat(){
const [message, setMessage] = useState('')
const [post, setPost] = useState<forType[]>([])

    function pushedOnText(itemId:string){
        setPost(post.filter(item=> item.id !== itemId))
    }


    function clickMessage(){      
        setPost([
            ...post,
           {
            id: new Date().toISOString(),
            text:message,
           }
        ])
        setMessage(prev => prev = '')
    }

    return(
        <div className="flex justify-between flex-col">
            <div className="text-white p-[30px] text-center self-center">
                <ul>
                     {post.map(item => <li key={item.id} onClick={() => pushedOnText(item.id)}><span></span> {item.text} </li>)}
                </ul>
                
            </div>
            <div className="flex m-[10px] w-[700px] ">
                <input className="w-full h-[40px] text-black rounded-md p-[10px]" 
                    placeholder="Напиши сообщение" 
                    type='text' 
                    value={message} 
                    onChange={(e)=>setMessage(e.target.value)}></input>
                <button className="mx-[10px] bg-red-300 rounded-md font-serif text-blue-950" onClick={clickMessage} >Отправить</button>
            </div>
        </div>
    )
}