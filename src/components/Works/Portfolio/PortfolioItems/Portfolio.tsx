import { NavLink } from 'react-router-dom';
import PortfolioCards from './PortfolioCards/PortfolioCards';
import styled from 'styled-components';
import { Generics } from '../../../Generics';
import { IoIosClose } from 'react-icons/io';
//IMAGES IMPORT
import OrinonoImg from '../../../../assets/orinoco.png';
import ReserviaImg from '../../../../assets/reservia.png';
import LaChouette from '../../../../assets/lachouetteagence.png';
import OhMyFood from '../../../../assets/ohmyfood.png'
import EluImg from '../../../../assets/elu.jpg'


const Tab = styled.div`
	height: auto;
	width: 100%;
	color: ${Generics.primary};
	border-bottom: 1px solid ${Generics.secondary};
`;
const TabTitleContainer = styled.span`
	height: auto;
	width: 200px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: nowrap;
	border-right: 1px solid ${Generics.secondary};
	align-items: center;
	padding: 6px;
`;

const TabTitle = styled.span``;

const Portfolio = () => {
	return (
		<div className='d-flex flex-column w-100 h-100'>
			<Tab>
				<TabTitleContainer>
					<TabTitle>portfolio</TabTitle>
					<span className='d-flex cursor-pointer'>
						<NavLink to='/works'>
							<IoIosClose
								size={22}
								color={Generics.primary}
							/>
						</NavLink>
					</span>
				</TabTitleContainer>
			</Tab>
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
