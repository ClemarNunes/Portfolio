import styles from './slug.module.css';
import { dados } from '@/helpers/dados';
import Image from 'next/image';
import Router from 'next/router';

type Props = {
  project: Project
}

type Project = {
  id: number;
  image: string;
  titleProject: string;
  description: string;
  images: string[];
  slug: string;
  
}

const ProjectDetails = ({project}: Props ) => {
   
  return (
    <main style={{ padding: '16px' }}>
      <h1>{project?.titleProject}</h1>
      <p>{project?.description} </p>
  
      <div className={styles.gallery}>
        {project?.images.map((img, index) => (
          <div key={img} className={styles.imageWrapper}>
            <Image
              src={img}
              alt={`${project.titleProject} - ${index + 1}`}
              layout="responsive"  // Responsivo no Next 12
              width={500}           // largura “base” da imagem
              height={300}          // altura proporcional
              objectFit="cover"     // cobre todo o espaço sem distorcer
              priority={index === 0} // primeira imagem carregada com prioridade
            />
          </div>
        ))}
      </div>

      <button onClick={() => Router.push("/Projects")} style={{ marginTop: '24px'  }}>
        Voltar
      </button>
    
    </main>
  );
};



export async function getStaticPaths() {
  const paths = dados.map(project => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const project = dados.find(item => item.slug === params.slug);

  return {
    props: {
      project,
    },
  };
}


export default ProjectDetails;
