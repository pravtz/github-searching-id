'use client'

import {Wrapper} from './styled'

export const LayoutBreakpoint = ({children}: { children:React.ReactNode }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}