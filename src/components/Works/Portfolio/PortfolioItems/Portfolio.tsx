import { NavLink } from 'react-router-dom';
import PortfolioCards from './PortfolioCards/PortfolioCards';
import { IoIosClose } from 'react-icons/io';
import './portfolio.scss';
//IMAGES IMPORT
import OrinonoImg from '../../../../assets/orinoco.png';
import ReserviaImg from '../../../../assets/reservia.png';
import LaChouette from '../../../../assets/lachouetteagence.png';
import OhMyFood from '../../../../assets/ohmyfood.png';
import EluImg from '../../../../assets/elu.jpg';
import { BsArrow90DegUp } from 'react-icons/bs';

const Portfolio = () => {
	return (
		<div className='d-flex flex-column w-100 h-100'>
			{/* <div className='tab'>
				<div className='tab-title-container'>
					<span className='tab-title'>
						portfolio
						<span className='d-flex cursor-pointer'>
							<NavLink to='/works'>
								<IoIosClose
									className='IoIosClose'
									size={22}
								/>
							</NavLink>
						</span>
					</span>
				</div>
			</div> */}
			<div className='d-flex h-100 w-100 align-items-center flex-wrap justify-content-center'>
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
				<div className='d-flex align-items-center justify-content-end w-100'>
					<span
						onClick={() => window.scrollTo(0, 0)}
						className='p-4 go-top'
					>
						<BsArrow90DegUp className='transform-arrow' />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
