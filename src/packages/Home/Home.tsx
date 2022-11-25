import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';

const secondaryColor = '#1e2d3d';

const GlobalStyle = createGlobalStyle`
	.app-bg {
		width: 80%;
		background-color: #011627;
		border-left: 1px solid ${secondaryColor};
		border-right: 1px solid ${secondaryColor};
		}
`;
function Home() {
	return (
		<>
			<GlobalStyle />
			<div className='w-100 h-100 app-bg d-flex justify-content-center'>
				<div className='h-100 w-75 d-flex'>
					<LeftContent />
					<RightContent />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
