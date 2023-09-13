'use client'

import {Wrapper, Content} from "@/components/NavigationLink/styled";
import Link from "next/link";
import {ChevronLeft} from 'lucide-react'

type NavigationLinkType = {
    name: string
    href: string
}
export const NavigationLink = ({name, href}: NavigationLinkType) => {
    return (
        <Wrapper>
            <Link href={href}>
                <Content>
                    <ChevronLeft size={24}  />
                    <p>{name}</p>
                </Content>
            </Link>

        </Wrapper>
    )
}