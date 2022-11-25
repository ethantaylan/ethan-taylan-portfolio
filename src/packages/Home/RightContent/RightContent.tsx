import React from 'react';
import BlurImg from '../../../assets/bg-blurs.png';
import styled from 'styled-components';

const BlurBg = styled.div`
	background-image: url(${BlurImg});
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: contain;
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	background-color: red;
`;
function RightContent() {
	return (
		<div className='h-100 w-100'>
			<BlurBg>
				<Container />
			</BlurBg>
		</div>
	);
}

export default RightContent;
