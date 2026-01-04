import styles from './Projects.module.css'
import Project from '../../components/Project';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { dados } from '../../helpers/dados'
import { useRouter } from 'next/router';
import { useIsMobile } from '@/hooks/useIsMobile';




const Projects = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({ image: '', titleProject: '', description: '',images:[] });


    const isMobile = useIsMobile();
    const router = useRouter();



    const handleProjectClick = (item: any) => {

        if (isMobile) {
            router.push(`/Projects/${item.slug}`);
            return;
        }

        // Desktop
        setModalData(item);
        setModalStatus(true); //antes não havia
    }

    return (
        <main className={styles.Container}>
            <div className={styles.areaProject}>

                <div className={styles.title}>
                    <h1>Projetos em Destaque</h1>
                </div>

                <div className={styles.projects}>

                    {dados.map((item, index) => (
                        <div key={index} className={styles.ProjectSection}>
                            <Project setModalStatus={setModalStatus} item={item} onClick={handleProjectClick} />
                            {/* <Project  item={item} onClick={handleProjectClick} /> */}
                        </div>
                    ))}
                
                </div>

                {/* <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} data={modalData} /> */}
                    
                {!isMobile && (
                    <Modal
                        modalStatus={modalStatus}
                        setModalStatus={setModalStatus}
                        data={modalData}
                    />
                )}




            </div>
        </main>
    );
}

export default Projects