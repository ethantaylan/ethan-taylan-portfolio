import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './portfolio-cards.scss'

interface PortfolioCardsProps {
	img: any;
	projectNumber: string;
	projectSubName: string;
	projectText: string;
}

const PortfolioCards: React.FC<PortfolioCardsProps> = ({
	projectText,
	projectNumber,
	projectSubName,
	img,
}) => {
	return (
		<div className='d-flex mb-5 align-items-center flex-column'>
			<div className='h-100 w-100 d-flex flex-row align-items-center'>
				<div className='d-flex flex-column w-100 m-4'>
					<span className='mb-3 card-title'>
						{`${'Project'} ${projectNumber}`}
						<span className='subcard-title'> {`${' //_'}${projectSubName}`}</span>
					</span>
					<Card
						className='primary'
						style={{ backgroundColor: '#001221', width: '100%' }}
					>
						<Card.Img
							variant='top'
							src={img}
							className='my-border portfolio-img-style'
						/>
						<Card.Body style={{ padding: '20px', backgroundColor: '#001221' }}>
							<Card.Text className='mb-4'>{projectText}</Card.Text>
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
