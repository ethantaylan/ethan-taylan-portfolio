import WorksTabs from '../../../packages/Works/WorksTabs';
import FolderBar from '../../Navbar/FolderBar/FolderBar';
import PortfolioCards from './PortfolioItems/PortfolioCards/PortfolioCards';
import './portfolio.scss';
import Orinoco from '../../../assets/Projects/orinoco.png';
import LaChouetteAgence from '../../../assets/Projects/lachouetteagence.png';
import Reservia from '../../../assets/Projects/reservia.png';
import OhMyFood from '../../../assets/Projects/ohmyfood.png';

const Portfolio = () => {
  return (
    <div className="d-flex app-bg flex-row h-100">
      <FolderBar title={'_works'} tabs={WorksTabs} />
      <div className="d-flex flex-wrap portfolio-container">
        <PortfolioCards
          img={Orinoco}
          projectNumber={'1'}
          projectSubName={'orinoco'}
          projectText={'This project helped me to handle basics of API calls.'}
          href="//github.com/ethantaylan/orinoco"
        />
        <PortfolioCards
          img={LaChouetteAgence}
          projectNumber={'2'}
          projectSubName={'la-chouette-agence'}
          projectText={'CEO and performance improvement of a webdesign agency.'}
          href="//github.com/ethantaylan/La_chouette_agence"
        />
        <PortfolioCards
          img={Reservia}
          projectNumber={'3'}
          projectSubName={'reservia'}
          projectText={
            'This project helped me to learn basics of HTML and CSS.'
          }
          href='//github.com/ethantaylan/Reservia'
        />
        <PortfolioCards
          img={OhMyFood}
          projectNumber={'4'}
          projectSubName={'oh-my-food'}
          projectText={
            'This project helped me to improve my responsive design skills.'
          }
          href="//github.com/ethantaylan/Ohmyfood"
        />
      </div>
    </div>
  );
};

export default Portfolio;
