'use client'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {ButtonNavigation, Wrapper} from "@/components/NavigationButton/styled";



type NavigationButtonType = {
    name: string
    direction: "left"|"right"
    disabled?: boolean
    onclick: ()=>void
}

export const NavigationButton = ({name, onclick , direction, disabled = false}:NavigationButtonType) => {


    return (
            <ButtonNavigation disabled={disabled} onClick={onclick} type={"button"}>
                <Wrapper isDisabled={disabled} >

                    {direction === "left" && <ChevronLeft size={18} color={"#cfcfcf"} /> }
                        {name}
                    {direction === "right" && <ChevronRight  size={18} color={"#cfcfcf"} />}
                </Wrapper>
            </ButtonNavigation>
    )
}