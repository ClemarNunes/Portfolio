import styles from './Skill.module.css';
 
// import { skillDados } from '../../helpers/skillDados';
import Image from 'next/image';

type Props = {
    image: string;
    title: string;
}

const Skill = ({ image, title }: Props) => {
    return (
        <div className={styles.SkillItem}>
            {/* <img src={image} height={50} width={50} alt="" className={styles.images} /> */}
            <div className={styles.imageArea}>
               <Image src={image} alt={title} layout='fill' objectFit='contain'  className={styles.images}  />
            </div>

            <div className={styles.titleArea}>
                <span>
                    {title}
                </span>
            </div>
        </div>
    );
}

export default Skill