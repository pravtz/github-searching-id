'use client'

import {ButtonTitle, Content, GroupTitle, IconChevron, TitleMenu, Wrapper} from "@/components/MenuLine/styled";
import {ChevronDown} from "lucide-react";
import {useState} from "react";
import {boolean} from "zod";

type MenuLineType = {
    children:React.ReactNode,
    title: string,
    isEmpty: boolean
    isStartOpen?: boolean
}

export const MenuLine = ({children, title, isEmpty, isStartOpen= false}: MenuLineType) => {
    const [open, setOpen] = useState<boolean>(isStartOpen)
    return (
        <Wrapper isEmpty={isEmpty}>
            <ButtonTitle onClick={()=> setOpen(!open)}>
                <GroupTitle>
                    <TitleMenu>{title}</TitleMenu>
                    <IconChevron isTurned={!open}>
                        <ChevronDown size={20} color="#787878" />
                    </IconChevron>
                </GroupTitle>
            </ButtonTitle>
            <Content isOpen={open}>
                {children}
            </Content>
        </Wrapper>
    )
}