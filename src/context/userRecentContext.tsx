'use client'
import {createContext, useEffect, useState} from "react";
import {BoxProfileUserType} from "@/components/BoxProfileUser";


type userRecentContextType = {
    items: BoxProfileUserType[] | null
    SetItem: (item: BoxProfileUserType) => void

}
export const UserRecentContext = createContext<userRecentContextType | undefined>(undefined)

export const LocalProvider = ({children}: { children: React.ReactNode }) => {
    const [items,setItems] = useState<BoxProfileUserType[]>([])

    const SetItem = (item: BoxProfileUserType) => {
        console.log("items: ",items,"length items: ",items.length, "items.indexOf(item)",items.indexOf(item))
        if(items.length > 0){
            if(items.length > 5){
                items.shift()
            }
            console.log("items: ",items,"length items: ",items.length, "items.indexOf(item)",items.indexOf(item))

            if(items.indexOf(item)<0){
                setItems([...items,item])
            }
        }else{
            setItems([item])
        }

    }



    // const getLocalStorage = () => {
    //     const saveItems = localStorage.getItem('local')
    //     if (saveItems) {
    //         setItems(JSON.parse(saveItems))
    //     }
    //     return items
    // }
    //
    //
    // const setLocalStorage= (item:BoxProfileUserType | null)=>{
    //     console.log("items esses são",items)
    //     setItems([item])
    //     localStorage.setItem('local',JSON.stringify(items))
    // }



    return (
        <UserRecentContext.Provider value={{
            items,
            SetItem

        }}>
            {children}
        </UserRecentContext.Provider>
    )
}