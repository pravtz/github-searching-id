'use client'

import {Wrapper, ImageLogo} from './styled'
import Logo from '/public/images/logo.svg'
import Image from 'next/image'

export const ReaderLayout = () => {
    return (
        <Wrapper>
            <ImageLogo>
                <Image src={Logo} width={149} height={46} alt="Logo"/>
            </ImageLogo>
        </Wrapper>
    )
}