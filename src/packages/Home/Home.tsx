import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';

const secondaryColor = '#1e2d3d';

const GlobalStyle = createGlobalStyle`
	.app-bg {
		background-color: #011627;
		border-left: 1px solid ${secondaryColor};
		border-right: 1px solid ${secondaryColor};
		}
`;
function Home() {
	return (
		<>
			<Navbar />
			<GlobalStyle />
			<div className='app-bg h-100 w-100 d-flex'>
				<LeftContent />
				<RightContent />
			</div>
			<Footer />
		</>
	);
}

export default Home;
