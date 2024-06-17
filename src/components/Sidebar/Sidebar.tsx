'use client'
import { Sun } from "lucide-react"
import Image from "next/image"
import logo from '../../../public/logo.png'
import {SidebarMenu} from './sidebar.data'
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Sidebar(){
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="flex flex-col w-[200px] h-[100vh] justify-between pl-[50px] border-r-[1px] border-neutral-600 py-[10px]">
         <Image className="rounded-[50px]"  width={100}  src={logo} alt='logo'/>
         <div className="flex flex-col">

            {SidebarMenu.map(item => (<Link key={item.id} className="flex p-[10px] text-indigo-300 hover:text-white" href={item.href}>
            <item.icon className="mr-[10px]"/>{item.text}
            </Link>))}

         
         </div>  
         <Sun className="text-indigo-300 cursor-pointer hover:text-white"/>
        </div>
    )
}