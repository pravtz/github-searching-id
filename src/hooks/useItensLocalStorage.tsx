import {useContext} from "react";
import {UserRecentContext} from "@/context/userRecentContext";

export const useItemsLocalStorage = ()=>{
    const context =  useContext(UserRecentContext)
    if(context ===undefined){
        throw new Error("must be used within an App Provider")
    }
    return context
}