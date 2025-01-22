import styles from "./Logo.module.css";


const Logo = () => {
    return(
        <div className={styles.logo}>
          {/* <img src="/assets/c.png" width={40} height={'auto'} alt="icon-logo" /> */}
          <div className={styles.logoInfo}>
            <span className={styles.logoInfo1}>Clemar Nunes</span>
            <span className={styles.logoInfo2}>W E B & U I D E S I G N E R</span>
          </div>
        </div>
    );
}

export default Logo;