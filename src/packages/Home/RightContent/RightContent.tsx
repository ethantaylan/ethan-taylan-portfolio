import React from 'react';
import BlurImg from '../../../assets/bg-blurs.png';
import CodeSnippetImg from '../../../assets/code-snippet.png';
import styled from 'styled-components';

const secondaryColor = '#1e2d3d';
const primaryColor = '#607b96';

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
	height: 335px;
	margin-top: 20px;
	margin-bottom: 20px;
	border: 1px solid ${secondaryColor};
`;

const Skills = styled.span`
	color: ${primaryColor};
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 12px;
`;
function RightContent() {
	return (
		<div className='h-100 w-100'>
			<Container>
				<BlurBg>
					<CodeSnipperContainer>
						<CodeSnippet src={CodeSnippetImg}></CodeSnippet>
						{/* <div className='d-flex flex-column'>
							<Skills>_sass</Skills>
							<Skills>_bootstrap</Skills>
							<Skills>_styled</Skills>
							<Skills>_react</Skills>
							<Skills>_typescript</Skills>
							<Skills>_strapi</Skills>
							<Skills>_photoshop</Skills>
							<Skills>_figma</Skills>
						</div> */}
					</CodeSnipperContainer>
				</BlurBg>
			</Container>
		</div>
	);
}

export default RightContent;
