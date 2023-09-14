import {Wrapper, Content, Name, ImageUser, Location, LoginAndId, Group} from './styled'
import Image from "next/image";

type BoxProfileUserType = {
    name: string
    login: string
    id: number
    location: string
    avatarUrl:{
        src:string
        alt:string
    }
}
export const BoxProfileUser = ({name,login,location,id, avatarUrl}: BoxProfileUserType) => {
    return (
        <Wrapper>
            <ImageUser>
                <Image src={avatarUrl.src} alt={avatarUrl.alt} width={82} height={82}/>
            </ImageUser>
            <Content>
                <Group>
                    <Name>{name}</Name>
                    <LoginAndId>{login}•{id}</LoginAndId>
                </Group>
                <Location>{location}</Location>
            </Content>
        </Wrapper>
    )
}