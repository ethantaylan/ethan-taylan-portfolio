import { NavLink } from 'react-router-dom';
import PortfolioCards from './PortfolioCards/PortfolioCards';
import { IoIosClose } from 'react-icons/io';

//IMAGES IMPORT
import OrinonoImg from '../../../../assets/orinoco.png';
import ReserviaImg from '../../../../assets/reservia.png';
import LaChouette from '../../../../assets/lachouetteagence.png';
import OhMyFood from '../../../../assets/ohmyfood.png'
import EluImg from '../../../../assets/elu.jpg'

const Portfolio = () => {
	return (
		<div className='d-flex flex-column w-100 h-100'>
			<div className='tab'>
				<div className='tab-title-container'>
					<span className='tab-title'>portfolio</span>
					<span className='d-flex cursor-pointer'>
						<NavLink to='/works'>
							<IoIosClose
								size={22}
							/>
						</NavLink>
					</span>
				</div>
			</div>
			<div className='d-flex h-100 align-items-center flex-wrap scroll-portfolio'>
				<PortfolioCards
					img={OrinonoImg}
					projectNumber={'1'}
					projectSubName={'orinoco'}
					projectText={'Lorem'}
				/>
				<PortfolioCards
					img={ReserviaImg}
					projectNumber={'2'}
					projectSubName={'reservia'}
					projectText={'Lorem'}
				/>
				<PortfolioCards
					img={LaChouette}
					projectNumber={'3'}
					projectSubName={'La chouette agence'}
					projectText={'Lorem'}
				/>
				<PortfolioCards
					img={OhMyFood}
					projectNumber={'4'}
					projectSubName={'oh my food'}
					projectText={'Lorem'}
				/>
				<PortfolioCards
					img={EluImg}
					projectNumber={'5'}
					projectSubName={'elu'}
					projectText={'Lorem'}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
