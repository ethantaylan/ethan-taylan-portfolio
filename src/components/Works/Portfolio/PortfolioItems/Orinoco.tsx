import { Button, Card } from 'react-bootstrap';
import PortfolioCards from './PortfolioCards/PortfolioCards';
import OrinonoImg from '../../../../assets/orinoco.png'

const Orinoco = () => {
	return (
		<div className='w-100 h-100'>
			<PortfolioCards tabTitle='orinoco.tsx' img={OrinonoImg} />
		</div>
	);
};

export default Orinoco;
