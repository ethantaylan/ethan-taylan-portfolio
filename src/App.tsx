// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ApplicationStarting from './components/ApplicationStarting/ApplicationStarting';
import useMediaQuery from './hooks/useMediaQuery';
import AppLayout from './packages/AppLayout';

function App() {
	const matches = useMediaQuery('(min-width: 768px)');

	return (
		<React.Fragment>
			{/* <ApplicationStarting /> */}
			<AppLayout />
		</React.Fragment>
	);
}

export default App;
