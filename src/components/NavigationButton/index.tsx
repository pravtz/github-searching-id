import {ChevronLeft, ChevronRight} from 'lucide-react'
import styled from './styled.module.sass'

type NavigationButtonType = {
    name: string
    direction: "left"|"right"
    disabled?: boolean
    onclick: ()=>void
}

export const NavigationButton = ({name, onclick , direction, disabled = false}:NavigationButtonType) => {
    return (
            <button disabled={disabled} className={styled.ButtonNavigation} onClick={onclick} type={"button"}>
                <div className={disabled ? styled["Wrapper--isDisabled"] : styled.Wrapper}  >
                    {direction === "left" && <ChevronLeft size={18} color={"#cfcfcf"} /> }
                        {name}
                    {direction === "right" && <ChevronRight  size={18} color={"#cfcfcf"} />}
                </div>
            </button>
    )
}