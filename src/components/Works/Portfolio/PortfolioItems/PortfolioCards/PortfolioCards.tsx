import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Generics } from '../../../../Generics';
import { Button, Card } from 'react-bootstrap';

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

const CardTitle = styled.span`
	color: ${Generics.purple};
	font-weight: bold;
`;

const SubCardtitle = styled.span`
	color: ${Generics.primary};
	font-weight: normal;
`;

interface PortfolioCardsProps {
	tabTitle: string;
	img: any;
}

const PortfolioCards: React.FC<PortfolioCardsProps> = ({ img, tabTitle }) => {
	return (
		<div className='d-flex align-items-center flex-column h-100 w-100'>
			<Tab>
				<TabTitleContainer>
					<TabTitle>{tabTitle}</TabTitle>
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

			<div className='h-100 w-100 p-5 d-flex flex-row align-items-center'>
        
				<div className='d-flex flex-column'>
					<CardTitle className='mb-3'>
						Project 1<SubCardtitle> // _orinoco</SubCardtitle>
					</CardTitle>
					<Card
						className='primary'
						style={{ backgroundColor: '#001221', width: '25rem' }}
					>
						<Card.Img
							variant='top'
							src={img}
							className='my-border portfolio-img-style'
						/>
						<Card.Body style={{ padding: '20px', backgroundColor: '#001221' }}>
							<Card.Text className='mb-4'>
								Some quick example text to build on the card title and make up the bulk
								of the card's content.
							</Card.Text>
							<Button
								className='p-2'
								style={{
									color: '#607b96',
									borderRadius: '3px',
									border: 'none',
									backgroundColor: '#1C2B3A',
								}}
							>
								view project
							</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCards;
