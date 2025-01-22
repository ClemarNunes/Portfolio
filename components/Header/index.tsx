import Logo from '../Logo';
import MenuMobile from '../MenuMobile';
import styles from './header.module.css';
import Link from 'next/link';
 



const Header = () => {
    return(
        <header className={styles.Header}>
            <div className={styles.AreaLogo} >
                <Logo />
            </div>
           
            <nav className={styles.NavArea}>
                    <ul>
                        <li className={styles.divisao}><Link className={styles.al} href='/'>Home</Link></li>
                        <li className={styles.divisao}> <Link href='/About'>About</Link> </li>
                        <li className={styles.divisao}> <Link href='/Projects'>Projects</Link> </li>
                        <li className={styles.divisao}> <Link href='/Skills'>Skills</Link> </li>
                        <li className={styles.divisao}> <Link href='/Contact'>Contact</Link> </li>
                    </ul>
            </nav>

            <MenuMobile />
        </header>
       
    );
}


export default Header