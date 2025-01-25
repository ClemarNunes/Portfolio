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


import Logo from '../components/Logo';
import TextAnimation from '../components/TextAnimation';
import styles from './Home.module.css'


const Home = () => {
  return (
    <main className={styles.Container}>

      <div className={styles.leftSide}>

        {/* <Logo /> */}

        <TextAnimation />

      </div>

      <div className={styles.rightSide}>
        <div className={styles.foto}>

          <img src="/assets/port2.png" height={`auto`} width={`${400}`} alt=""  />
           
        </div>
      </div>
      
    </main>
  );
}

export default Home;