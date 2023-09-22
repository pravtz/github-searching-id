import styled from './styled.module.sass'
import Image from "next/image";


export type BoxProfileUserType = {
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
        <section className={styled.wrapper}>
            <figure>
                <Image src={avatarUrl.src} alt={avatarUrl.alt} width={82} height={82} style={{borderRadius:"8px"}}/>
            </figure>
            <div className={styled.content}>
                <div className={styled.loginAndId}>
                    <h1 className={styled.name}>{name}</h1>
                    <p>{login} • <span>ID: {id}</span></p>
                </div>
                <p className={styled.location}>{location}</p>
            </div>
        </section>
    )
}