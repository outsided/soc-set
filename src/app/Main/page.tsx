
import Chat from '@/components/screens/(chats)/Chat'
import ChatList from '@/components/screens/(chats)/ChatList'
import Profile from '@/components/screens/(chats)/Profile'


export default function Main(){
    return (
        <div className='flex '>
            <div className='flex flex-col w-[370px] border-r-[1px] border-neutral-600'>
                <div className=' border-b-[1px]  border-neutral-600 py-[50px] text-center text-white '  >
                     <Profile/>
                </div>
                <ChatList/>
            </div>
            <div className=''>
                <Chat/>
            </div>
        </div>
    )
}