import styled from './styled.module.sass'

export const LayoutBreakpoint = ({children}: { children:React.ReactNode }) => {
    return (
        <div className={styled.Wrapper}>
            {children}
        </div>
    )
}