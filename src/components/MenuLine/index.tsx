'use client'

import {ChevronDown} from "lucide-react";
import {useState} from "react";
import styled from './styled.module.sass'

type MenuLineType = {
    children:React.ReactNode,
    title: string,
    isEmpty: boolean
    isStartOpen?: boolean
}

export const MenuLine = ({children, title, isEmpty, isStartOpen= false}: MenuLineType) => {
    const [open, setOpen] = useState<boolean>(isStartOpen)
    return (
        <section className={isEmpty ? styled["wrapper--isEmpty"] : styled.Wrapper}>
            <button className={styled.ButtonTitle} onClick={()=> setOpen(!open)}>
                <div className={styled.GroupTitle}>
                    <h3 className={styled.TitleMenu}>{title}</h3>
                    <div className={!open ? styled['IconChevron--isTurned'] : styled.IconChevron}>
                        <ChevronDown size={20} color="#787878" />
                    </div>
                </div>
            </button>
            <div className={open ? styled["Content--isOpen"] : styled.Content}>
                {children}
            </div>
        </section>
    )
}