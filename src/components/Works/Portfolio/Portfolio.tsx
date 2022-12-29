import WorksTabs from '../../../packages/Works/WorksTabs';
import FolderBar from '../../Navbar/FolderBar/FolderBar';
import PortfolioCards from './PortfolioItems/PortfolioCards/PortfolioCards';
import './portfolio.scss';
import Orinoco from '../../../assets/Projects/orinoco.png'
import LaChouetteAgence from '../../../assets/Projects/lachouetteagence.png'
import Reservia from '../../../assets/Projects/reservia.png'
import OhMyFood from '../../../assets/Projects/ohmyfood.png'

const Portfolio = () => {
  return (
    <div className="d-flex app-bg flex-row h-100">
      <FolderBar title={'_works'} tabs={WorksTabs} />
      <div className="d-flex flex-wrap portfolio-container">
        <PortfolioCards
          img={Orinoco}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
        <PortfolioCards
          img={LaChouetteAgence}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
        <PortfolioCards
          img={Reservia}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
        <PortfolioCards
          img={OhMyFood}
          projectNumber={''}
          projectSubName={''}
          projectText={''}
        />
      </div>
    </div>
  );
};

export default Portfolio;
