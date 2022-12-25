import React from 'react';
//IMAGES IMPORT
import OrinonoImg from '../../../../assets/orinoco.png';
import ReserviaImg from '../../../../assets/reservia.png';
import LaChouette from '../../../../assets/lachouetteagence.png';
import OhMyFood from '../../../../assets/ohmyfood.png';

import PortfolioCards from './PortfolioItems/PortfolioCards/PortfolioCards';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { BsArrow90DegUp } from 'react-icons/bs';

const Portfolio = () => {
    
    const matches = useMediaQuery('(max-width: 768px)');

	return (
		<div className='d-flex h-100 w-100 align-items-center flex-wrap justify-content-center'>
			<PortfolioCards
				img={ReserviaImg}
				projectNumber={'1'}
				projectSubName={'reservia'}
				projectText={'HTML & CSS project'}
				href={'https://ethantaylan.github.io/Reservia/'}
			/>
			<PortfolioCards
				img={LaChouette}
				projectNumber={'2'}
				projectSubName={'la-chouette-agence'}
				projectText={'CEO refactoring'}
				href={'https://ethantaylan.github.io/La_chouette_agence/'}
			/>
			<PortfolioCards
				img={OrinonoImg}
				projectNumber={'3'}
				projectSubName={'orinoco'}
				projectText={'Javascript project using Teddybears API'}
				isModalActive={true}
			/>
			<PortfolioCards
				img={OhMyFood}
				projectNumber={'4'}
				projectSubName={'oh-my-food'}
				projectText={'Mobile first project'}
				href={'https://ethantaylan.github.io/Ohmyfood/'}
				isModalActive={false}
			/>
			{matches && (
				<div className='d-flex align-items-center justify-content-end w-100'>
					<span
						onClick={() => window.scrollTo(0, 0)}
						className='p-4 go-top'
					>
						<BsArrow90DegUp className='hover transform-arrow' />
					</span>
				</div>
			)}
		</div>
	);
};

export default Portfolio