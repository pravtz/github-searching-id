'use client'
import {
    SectionCopy,
    SectionSplash,
    TextCopy,
    Wrapper,
    DividingLine,
    WrapperButtonEnter
} from "@/components/ScreenStart/styled";
import Image from 'next/image'
import Logo from '/public/images/logo.svg'
import ImageCopy from '/public/images/image-copy.svg'
import {Button} from "@/components/Button";

export const ScreenStart = () => {
    return (
        <Wrapper>
            <SectionSplash>
                <Image src={ImageCopy} width={300} height={300}  alt="imagem de uma busca de um repositório" />
            </SectionSplash>
            <DividingLine />
            <SectionCopy>
                <Image src={Logo} width={312} height={96} alt="Logo"/>
                <TextCopy>Procurando por informações de usuários do GitHub? Não procure mais! Nosso aplicativo <strong>GITHUB SEARCHING ID</strong> é a ferramenta perfeita para acessar dados detalhados de perfis GitHub de maneira rápida e gratuita.</TextCopy>
                <WrapperButtonEnter>
                    <Button label="Entrar" />
                </WrapperButtonEnter>

            </SectionCopy>

        </Wrapper>
    )
}