import { MessageCircle, Phone, Settings, User} from 'lucide-react'

type Menu = {
    id:number,
    icon: any,
    href: string,
    text: string,
}
type forMenu= Menu 


export const SidebarMenu:forMenu[]= [
    {
        id:1,
        icon: User,
        href: '/friends',
        text: 'Friends',

    },
    {
        id:1,
        icon: Settings,
        href: '/settings',
        text: 'Settings',

    },
    {
        id:1,
        icon: Phone,
        href: '/call',
        text: 'Call',

    },
    {
        id:1,
        icon: MessageCircle,
        href: '/message',
        text: 'Message',

    },
]
