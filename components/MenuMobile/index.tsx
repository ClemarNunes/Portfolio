import { useState } from "react";
import styles from "./MenuMobile.module.css"
import { MenuMobileLinks } from "../../utils/MenuMobileLinks";
import Link from "next/link";

const MenuMobile = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handlerMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        setOpenMenu(!openMenu);
    }


    return(
        <nav className={styles.containerMobile} onClick={handlerMenu}>
            <div className={styles.mobileAreaBar} >
                
                <div className={styles.mobileBar}></div>
                <div className={styles.mobileBar}></div>
                <div className={styles.mobileBar}></div>
            
            </div>

            {openMenu && (
                <div  className={styles.MenuMobile}>
                    <ul>
                        {MenuMobileLinks.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
            )}

        </nav>
    );
}

export default MenuMobile;