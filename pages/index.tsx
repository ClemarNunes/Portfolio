// import TextAnimation from '../components/TextAnimation';
// import styles from './Home.module.css'


// const Home = () => {
//   return(
//     <div className={styles.Container}>
      
//       <TextAnimation />

        
      
//     </div>
//   );
// }

// export default Home;


import TextAnimation from '../components/TextAnimation';
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.Container}>

      <div className={styles.leftSide}>

        <div className={styles.logo}>
          <img src="/assets/c.png" width={40} height={'auto'} alt="icon-logo" />
          <div className={styles.logoInfo}>
            <span className={styles.logoInfo1}>Clemar Nunes</span>
            <span className={styles.logoInfo2}>W E B & U I D E S I G N E R</span>
          </div>
        </div>

        <TextAnimation />

      </div>

      <div className={styles.rightSide}>
        <div className={styles.foto}>

          <img src="/assets/port2.png" height={'auto'} width={400} alt="" />
          {/* <img src="/assets/port2.png" /> */}
        </div>
      </div>
      
    </div>
  );
}

export default Home;