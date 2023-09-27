import styled from './styled.module.sass'
import Logo from '/public/images/logo.svg'
import Image from 'next/image'

export const ReaderLayout = () => {
    return (
        <div className={styled.Wrapper}>
            <figure>
                <Image src={Logo} width={149} height={46} alt="Logo"/>
            </figure>
        </div>
    )
}