import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'


export function Header() {

    const { signOut } = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={"/dashboard"}>
                    <img src="/logo.png" alt="Logo" width={70} height={60} />
                </Link>

                <nav className={styles.menuNav}>
                    <Link href="/category">
                        <a href="">Categoria</a>
                    </Link>

                    <Link href="/product">
                        <a href="">Cardapio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut  color='#fff' size={24}/>
                    </button>

                </nav>

            </div>
        </header>
    )
}