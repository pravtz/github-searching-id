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
                <Image src={avatarUrl.src} alt={avatarUrl.alt} width={82} height={82} style={{borderRadius:"8px"}}/>
            </ImageUser>
            <Content>
                <Group>
                    <Name>{name}</Name>
                    <LoginAndId>{login} • <span>ID: {id}</span></LoginAndId>
                </Group>
                <Location>{location}</Location>
            </Content>
        </Wrapper>
    )
}