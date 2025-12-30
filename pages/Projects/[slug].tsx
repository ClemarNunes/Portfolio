import { useRouter } from 'next/router';
// import dados from '@/data/projects';
import { dados } from '@/helpers/dados';

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
    
  const project = dados.find(item => item.slug === slug);

  if (!project) return null;

  return (
    <main style={{ padding: '16px' }}>
      <h1>{project.titleProject}</h1>
      <p>{project.description}</p>

      <div>
        {project.images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={project.titleProject}
            style={{ width: '100%', marginBottom: '12px' }}
          />
        ))}
      </div>

      <button style={{ marginTop: '24px' }}>
        Quero um projeto assim
      </button>
    
    </main>
  );
};

export default ProjectDetails;
