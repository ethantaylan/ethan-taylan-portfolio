import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../../../Generics';
import { Button, Card } from 'react-bootstrap';

const CardTitle = styled.span`
	color: ${Generics.purple};
	font-weight: bold;
`;

const SubCardtitle = styled.span`
	color: ${Generics.primary};
	font-weight: normal;
`;

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
		<div className='d-flex align-items-center flex-column'>
			<div className='h-100 w-100 d-flex flex-row align-items-center'>
				<div className='d-flex flex-column w-100 m-4'>
					<CardTitle className='mb-3'>
						{`${'Project'} ${projectNumber}`}
						<SubCardtitle> {`${' //_'}${projectSubName}`}</SubCardtitle>
					</CardTitle>
					<Card
						className='primary'
						style={{ backgroundColor: '#001221', width: '20vw' }}
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
