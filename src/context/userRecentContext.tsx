'use client'
import {createContext, useEffect, useState} from "react";
import {BoxProfileUserType} from "@/components/BoxProfileUser";


type userRecentContextType = {
    items: BoxProfileUserType[] | null
    setItem: (items:BoxProfileUserType[] | null)=> void
}
export const UserRecentContext = createContext<userRecentContextType | undefined>(undefined)

export const LocalProvider = ({children}: { children: React.ReactNode }) => {
    const [items,setItem] = useState<BoxProfileUserType[] | null>(null)

    useEffect(()=>{
        const saveItems = localStorage.getItem('local')
        if(saveItems){
            setItem(JSON.parse(saveItems))
        }
    },[])
    useEffect(()=>{
        if(items){
            localStorage.setItem('local',JSON.stringify(items))
        }
    },[items])


    return (
        <UserRecentContext.Provider value={{
            items,
            setItem
        }}>
            {children}
        </UserRecentContext.Provider>
    )
}