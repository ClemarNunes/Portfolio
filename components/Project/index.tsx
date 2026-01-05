import { ReactElement, useState } from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';
import Tecnology from '../Technology';
import Image from 'next/image';

type Props = {
    setModalStatus: (setModalStatus: boolean) => void;
    item: ProjectInfo;
    onClick: (item: any) => void;
}

type ProjectInfo = {
    titleProject: string;
    image: string;
    description: string;
    tecnologias: string[];
    
}

const Project = ({ setModalStatus, item, onClick,  }: Props) => {

    const handleClick = () => {
        onClick(item)
        setModalStatus(true)
    }

    return (
        <>
            <article className={styles.Container}  >
               
                <figure  className={styles.projectArea} onClick={handleClick} >  {/* é a tag correta para conteúdo de mídia, como imagens de projetos. */}

                    {/* <img src={item.image} height={`${100}%`} width={`${100}%`} alt="" /> */}
                    <Image src={item.image} alt={item.titleProject} layout="fill" objectFit="cover" priority={false} />
                    <figcaption className={styles.tela}> {/* descreve a imagem, melhorando SEO e acessibilidade. */}

                        <h3>{item.titleProject}</h3>
                    </figcaption>
                </figure>

                <div className={styles.ProjectInfo}>
                    <div className={styles.titleRight}>{item.titleProject} </div> {/*deve ser substituido por um h2*/}
                    <p className={styles.descriptionRight}>{item.description} </p>
                    <section className={styles.tecnologiaArea}>
                        <h3>Tecnologias</h3>
                        <ul>
                            {item.tecnologias.map((item) =>(   
                                <Tecnology tecnology={item} />
                            ))}
                        </ul>
                    </section>

                    <div>
                        <button className={styles.buttonRight} onClick={handleClick}  aria-label={`Ver mais sobre o projeto ${item.titleProject}`}>
                            <span>Veja Mais</span>
                            <img src="/assets/next.png" height={'auto'} width={15} alt="" />
                        </button>
                    </div>

                </div>
            </article>
        </>
    );
}

export default Project;