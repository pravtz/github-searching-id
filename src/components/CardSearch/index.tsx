import styled from "./styled.module.sass"
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
            <section className={styled.wrapper}>
                <figure className={styled.avatar}>
                    <Image src={src} alt={alt} width={48} height={48} style={{borderRadius: "8px"}}/>
                </figure>
                <div className={styled.content}>
                    <h2 className={styled.nameText}>{name}</h2>
                    <p className={styled.loginText}>{login}</p>
                    <div className={styled.groupIconAndText}>
                        <MapPin size={10} color={"#797979"}/>
                        <p className={styled.locationText}>{location}</p>
                    </div>
                </div>
            </section>
        </Link>

    )
}
