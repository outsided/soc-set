
import Image from "next/image"
import logo from '../../../public/logo.png'
import { MessageCircle, Phone, Settings, Sun, User} from 'lucide-react'
import Link from "next/link"
export default function Sidebar(){
    return (
        <div className="flex flex-col w-[200px] h-[100vh] justify-between pl-[50px] border-r-2 border-neutral-600 py-[10px]">
         <Image className="rounded-[50px]"  width={100}  src={logo} alt='logo'/>
         <div className="flex flex-col">
            <Link className="flex p-[10px] text-indigo-300 hover:text-white" href='/friends'><User className="mr-[10px]"/>Friends</Link>
            <Link className="flex p-[10px] text-indigo-300 hover:text-white" href='/call'><Phone className="mr-[10px]"/> Call</Link>
            <Link className="flex p-[10px] text-indigo-300 hover:text-white" href='/message'><MessageCircle className="mr-[10px]"/> Message </Link>
            <Link className="flex p-[10px] text-indigo-300 hover:text-white" href='/settings'><Settings className="mr-[10px]"/>Settings</Link>
         </div>  
         <Sun className="text-indigo-300 cursor-pointer hover:text-white"/>
        </div>
    )
}