import styles from './Skill.module.css';
// import { skillDados } from '../../helpers/skillDados';

type Props = {
    image: string;
    title: string;
}

const Skill = ({ image, title }: Props) => {
    return (
        <div className={styles.SkillItem}>
            <img src={image} height={50} width={50} alt="" className={styles.images} />

            <div>
                <span>
                    {title}
                </span>
            </div>
        </div>
    );
}

export default Skill