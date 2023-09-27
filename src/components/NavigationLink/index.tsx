import Link from "next/link";
import {ChevronLeft} from 'lucide-react'
import styles from './styled.module.sass'

type NavigationLinkType = {
    name: string
    href: string
}
export const NavigationLink = ({name, href}: NavigationLinkType) => {
    return (
        <div>
            <Link href={href}>
                <div className={styles.content}>
                    <ChevronLeft size={24}  />
                    <p>{name}</p>
                </div>
            </Link>

        </div>
    )
}