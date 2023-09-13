'use client'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {ButtonNavigation, Wrapper} from "@/components/NavigationButton/styled";

type NavigationButtonType = {
    name: string
    direction: "left"|"right"
    disabled?: boolean

}

export const NavigationButton = ({name, direction, disabled = false}:NavigationButtonType) => {
    return (
            <ButtonNavigation disabled={disabled} type={"button"}>
                <Wrapper>
                    {direction === "left" ?? <ChevronLeft />}
                        {name}
                    {direction === "right" ?? <ChevronRight />}
                </Wrapper>
            </ButtonNavigation>
    )
}