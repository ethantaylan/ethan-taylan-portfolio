import WorksTabs from '../../../packages/Works/WorksTabs';
import FolderBar from '../../Navbar/FolderBar/FolderBar';
import PortfolioCards from './PortfolioItems/PortfolioCards/PortfolioCards';
import './portfolio.scss'


const Portfolio = () => {
  return (
    <div className="d-flex app-bg flex-row h-100">
      <FolderBar title={'_works'} tabs={WorksTabs} />
      <div className="d-flex flex-wrap portfolio-container">
        <PortfolioCards
          img={undefined}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
        <PortfolioCards
          img={undefined}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
        <PortfolioCards
          img={undefined}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
                <PortfolioCards
          img={undefined}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
      </div>
    </div>
  );
};

export default Portfolio;
