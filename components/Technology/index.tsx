import styles from './technology.module.css';
type TecnologyProps = {
  tecnology: string
}

const Tecnology = ({tecnology}:TecnologyProps) => {
    return(
        <li className={styles.tecnologias}>
            {tecnology}
        </li>
    )
}

export default Tecnology;