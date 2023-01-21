import useMediaQuery from '../../hooks/useMediaQuery';
import WorksTabs from './WorksTabs';
import FolderBar from '../../components/Navbar/FolderBar/FolderBar';
import PortfolioCards from '../../components/PortfolioCards/PortfolioCards/PortfolioCards';
import { projectCards } from './CardsInformations';
import './works.scss';

const Portfolio = () => {
  const matches = useMediaQuery('(max-width: 992px)');

  if (matches) {
    document.body.classList.add('h-auto');
  } else {
    document.body.classList.remove('h-auto');
  }

  return (
    <div
      className={`d-flex app-bg ${matches ? 'flex-column' : 'flex-row'} h-100`}
    >
      <FolderBar title={'_works'} tabs={WorksTabs} />
      <div
        className={`d-flex flex-wrap ${
          matches && ' my-border-top'
        } portfolio-container`}
      >
        {projectCards.map((project, key) => (
          <PortfolioCards
            key={key}
            img={project.image}
            projectNumber={project.number}
            projectSubName={project.title}
            projectText={project.description}
            children={project.children}
            href={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
