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
	color: #a0ffb4;
	letter-spacing: normal; ;
`;

const Name = styled.span`
	font-size: 45px;
	color: white;
	letter-spacing: normal;
	text-indent: -3px;
	font-weight: bold;
`;

const Frontend = styled.span`
	color: #4d5bce;
	font-size: 28px;
`;

const Subtitle = styled.span`
	color: ${primaryColor};
`;

const Githublink = styled.span`
	color: white;
`;

function LeftContent() {
	return (
		<Container>
			<div className='d-flex flex-column h-100 justify-content-center'>
				<div className='d-flex h-25 justify-content-around flex-column'>
					<Welcome>Welcome()</Welcome>
					<Name>Ethan Taylan</Name>
					<Frontend>{'>'} Frontend developer</Frontend>
				</div>
				<div className='d-flex h-25 mt-5 justify-content-around flex-column'>
					<Subtitle>
						// You can check see my works{' '}
						<span
							style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer' }}
						>
							here
						</span>
					</Subtitle>
					<Subtitle>// You can also go to my Github page</Subtitle>
					<Githublink>
						<span style={{ color: '#4d5bce' }}>const</span>{' '}
						<span style={{ color: '#43D9AD' }}>GithubLink</span> ={' '}
						<span style={{ color: 'orange' }}>https://github.com/ethantaylan/</span>
					</Githublink>
				</div>
			</div>
		</Container>
	);
}

export default LeftContent;
