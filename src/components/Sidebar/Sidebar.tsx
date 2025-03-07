'use client'
import { Sun } from "lucide-react"
import Image from "next/image"
import logo from '../../../public/logo.png'
import {SidebarMenu} from './data'
import Link from "next/link"
import { useState } from "react"


export default function Sidebar(){
    const [color, setColor] = useState('text-white')
    function mainColor(){
        if(color === 'text-black'){
            setColor(prev => prev = 'text-white')
        }else {
            setColor(prev => prev = 'text-black')
        }
        
    }
    
    return (
        <div className="flex flex-col w-[200px] h-[100vh] justify-between pl-[50px] border-r-[1px] border-neutral-600 py-[10px]">
              <Link href='/'><Image className="rounded-[50px]"  width={100}  src={logo} alt='logo'/></Link>         
              <div className="flex flex-col">

           {SidebarMenu.map(item =><Link key={item.id} href={item.href} className={`${color} flex m-[10px]`}><item.icon key={item.id}></item.icon>{item.text}</Link>)}
            
         </div>  
         <Sun className="text-indigo-300 cursor-pointer hover:text-white" onClick={mainColor}/>
       
        </div>
    )
}