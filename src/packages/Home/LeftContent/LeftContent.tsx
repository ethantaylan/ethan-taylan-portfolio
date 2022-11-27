import React from 'react';
import styled from 'styled-components';

const primaryColor = '#607b96';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Welcome = styled.span`
	color: #43d9ad;
	letter-spacing: normal;
	font-size: 20px;
	margin-bottom: 5px;
`;

const Name = styled.span`
	font-size: 45px;
	color: white;
	text-indent: -3px;
	font-weight: bold;
`;

const Frontend = styled.span`
	color: #4d5bce;
	font-size: 28px;
	margin-top: 5px;
	letter-spacing: -1.3px;
`;

const Subtitle = styled.span`
	color: ${primaryColor};
	margin-top: 10px;
	margin-bottom: 10px;
`;

const GithubLink = styled.span`
	color: white;
	font-size: 14px;
	margin-top: 20px;
`;

function LeftContent() {
	return (
		<Container>
			<div className='d-flex flex-column'>
				<div className='d-flex justify-content-around flex-column'>
					<Welcome>_hello ! i'm</Welcome>
					<Name>Ethan Taylan</Name>
					<Frontend>{'>'} Frontend developer</Frontend>
				</div>
				<div className='d-flex mt-5 justify-content-around flex-column'>
					<Subtitle>
						// You can see my works {'->'}{' '}
						<span
							style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer' }}
						>
							here
						</span>
					</Subtitle>
					<Subtitle>// You can also go to my Github page</Subtitle>

					<GithubLink>
						<span style={{ color: '#4d5bce' }}>const</span>{' '}
						<span style={{ color: '#43D9AD' }}>GithubLink</span> ={' '}
						<span style={{ color: 'orange' }}>
							<a
								target='_blank'
								href='https://github.com/ethantaylan/'
								className='my-2'
							>
								<span className='text-decoration-underline-hover'>
									https://github.com/ethantaylan/
								</span>
							</a>
						</span>
					</GithubLink>
				</div>
			</div>
		</Container>
	);
}

export default LeftContent;
