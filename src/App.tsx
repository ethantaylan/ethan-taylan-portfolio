// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import DesktopNotReady from './components/DesktopNotReady/DesktopNotReady';
import useMediaQuery from './hooks/useMediaQuery';
import AppLayout from './packages/AppLayout';

function App() {
	const matches = useMediaQuery('(min-width: 768px)');

	return (
		<React.Fragment>
			{matches ? <DesktopNotReady /> : <AppLayout />}
		</React.Fragment>
	);
}

export default App;
