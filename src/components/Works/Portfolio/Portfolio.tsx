import WorksTabs from '../../../packages/Works/WorksTabs';
import FolderBar from '../../Navbar/FolderBar/FolderBar';
import PortfolioCards from './PortfolioItems/PortfolioCards/PortfolioCards';
import './portfolio.scss';
import Orinoco from '../../../assets/Projects/orinoco.png';
import LaChouetteAgence from '../../../assets/Projects/lachouetteagence.png';
import Reservia from '../../../assets/Projects/reservia.png';
import OhMyFood from '../../../assets/Projects/ohmyfood.png';
import useMediaQuery from '../../../hooks/useMediaQuery';

const Portfolio = () => {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className={`d-flex app-bg ${matches ? 'flex-column' : 'flex-row'} h-100`}
    >
      <FolderBar title={'_works'} tabs={WorksTabs} />
      <div
        className={`d-flex flex-wrap ${
          matches && 'my-border-top'
        } portfolio-container`}
      >
        <PortfolioCards
          img={Orinoco}
          projectNumber={'1'}
          projectSubName={'orinoco'}
          projectText={'This project helped me to handle basics of API calls.'}
          href="//github.com/ethantaylan/orinoco"
          isModalActive={true}
          children={<img className="w-75" src={Orinoco} alt="Orinoco img" />}
        />
        <PortfolioCards
          img={LaChouetteAgence}
          projectNumber={'2'}
          projectSubName={'la-chouette-agence'}
          projectText={'CEO and performance improvement of a webdesign agency.'}
          href="//github.com/ethantaylan/La_chouette_agence"
          isModalActive={true}
          children={
            <img
              className="w-75"
              src={LaChouetteAgence}
              alt="LaChouetteAgence image"
            />
          }
        />
        <PortfolioCards
          img={Reservia}
          projectNumber={'3'}
          projectSubName={'reservia'}
          projectText={
            'This project helped me to learn basics of HTML and CSS.'
          }
          href="//github.com/ethantaylan/Reservia"
          isModalActive={true}
          children={
            <img className="w-75" src={Reservia} alt="Reservia image" />
          }
        />
        <PortfolioCards
          img={OhMyFood}
          projectNumber={'4'}
          projectSubName={'oh-my-food'}
          projectText={
            'This project helped me to improve my responsive design skills.'
          }
          href="//github.com/ethantaylan/Ohmyfood"
          isModalActive={true}
          children={
            <img className="w-75" src={OhMyFood} alt="OhMyFood image" />
          }
        />
      </div>
    </div>
  );
};

export default Portfolio;
