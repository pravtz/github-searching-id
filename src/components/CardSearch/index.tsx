import {Wrapper, Avatar, Content, NameText, LoginText, GroupIconAndText} from "@/components/CardSearch/styled";
import Image from 'next/image'
import {MapPin} from "lucide-react";
import Link from "next/link";

type CardSearchType = {
    name: string
    login: string
    location: string
    image: {
        src: string
        alt: string
    }
}

export const CardSearch = ({name, login, location, image: {src, alt}}: CardSearchType) => {
    return (
        <Link href={`/user/${login}/1`}>
            <Wrapper>
                <Avatar>
                    <Image src={src} alt={alt} width={48} height={48} style={{borderRadius: "8px"}}/>
                </Avatar>
                <Content>
                    <NameText>{name}</NameText>
                    <LoginText>{login}</LoginText>
                    <GroupIconAndText>
                        <MapPin size={10} color={"#797979"}/>
                        <LoginText>{location}</LoginText>
                    </GroupIconAndText>
                </Content>
            </Wrapper>
        </Link>

    )
}
