'use client'
import { useState } from "react"
import {forSettings} from './data.settings'
export default function Settings(){
    const [teams, setTeams] = useState([])
    function settingsHeandler(rubricNum:number){
       if( rubricNum === 1){}
        else if (rubricNum === 2){}
        else if(rubricNum === 3 ){}
        else if (rubricNum === 4){
            setTeams(prev => {
                if(prev.length>1) return teams
                else{ 
                    return [
                        ...prev,
                        {
                            id:new Date().toISOString(),
                            team: 'gray',
                            color: 'text-gray-600',
                        },
                        {    
                            id:new Date().toISOString(),
                            team: 'green',
                            color: 'text-green-600',
                        },
                        {    
                            id:new Date().toISOString(),
                            team: 'teal',
                            color: 'text-teal-600',
                        }
                    ] 
                 
                }
            }
            )
        }
    }

    return (
        <div className="flex m-[30px] w-full justify-center">
            <div className="text-white  ">
                <ul className="font-style: italic text-xl flex flex-col ">
                {forSettings.map(item=> <li key={item.id} className="m-[40px]" onClick={()=> settingsHeandler(item.num)}>{item.setSettin}</li>)}
                </ul>
            </div>
            <div>
                <ul key='5' className="flex text-white text-[20px] ml-[40px] text-center">
                         {teams.map(item => <li key={item.id} className={`m-[40px] text-[40px] cursor-pointer ${item.color}`}>{item.team} <div className={`'w-[50px] h-[20px]'`}></div></li>)}
                </ul>
            </div>
        </div>
    )
}