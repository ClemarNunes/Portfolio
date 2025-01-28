import Skill from '../../components/Skill';
import styles from './Skills.module.css'
import { skillDados } from '../../helpers/skillDados';

const Skills = () => {
    return (
        <main className={styles.Container}>

            <div className={styles.skillsArea}>

                <div className={styles.skillsTitle}>
                    <h1>Skills</h1>
                </div>


                <div className={styles.skills}>

                    {skillDados.map((item, index) => (
                        <div key={index} className={styles.skillsItem}>
                            <Skill image={item.image} title={item.title} />
                           
                        </div>
                    ))}
                </div>




            </div>

        </main>
    );
}

export default Skills;


// <h3>What I Offer:</h3>
//                         <h4>Responsive Design:</h4>
//                         <span>Interfaces adaptáveis para todos os dispositivos.</span>

//                         <h4>Interactive Development:</h4>
//                         <span>Engaging features with the latest technologies.</span>

//                         <h4>Performance Optimization:</h4>
//                         <span>Fast, efficient websites for frictionless experiences.</span>

//                         <h4>Modern Integration:</h4>
//                         <span>Implementation of innovative technologies such as ReactJs</span>

//                         <h4>Transparent Collaboration:</h4>
//                         <span>Open communication to meet your expectations.</span>
