import React from 'react';
import BlurImg from '../../../assets/bg-blurs.png';
import CodeSnippetImg from '../../../assets/code-snippet.png';
import styled from 'styled-components';
import { Generics } from '../../../components/Generics';

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
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: center;
`;

const CodeSnipperContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const CodeSnippet = styled.img`
	width: 50%;
	border: 1px solid ${Generics.secondary};
	border-radius: 12px;
	box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
`;

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
	return (
		<div className='h-100 w-100'>
			<Container>
				<BlurBg>
					<CodeSnipperContainer>
						<CodeSnippet src={CodeSnippetImg}></CodeSnippet>
					</CodeSnipperContainer>
				</BlurBg>
			</Container>
		</div>
	);
};

export default RightContent;
