import Image from "next/image"
import logo from '../../../public/logo.jpg'
import { MessageCircle, Phone, Settings, Sun, User} from 'lucide-react'
import Link from "next/link"



export default function () {
    return (
        <div className="flex flex-col h-[800px] w-[200px] justify-between pl-[50px] ">
            <Image width={100}  src={logo} alt='logo'/>
            <div className="flex flex-col">
                <Link className="flex p-[10px]" href='/User 1'><User/>Users</Link>
                <Link className="flex p-[10px]" href='/Call'><Phone/> Call</Link>
                <Link className="flex p-[10px]" href='/Message'><MessageCircle/> Message </Link>
                <Link className="flex p-[10px]" href='/'><Settings/>Settings</Link>
            </div>  
            <Sun/>
        </div>
    )
}