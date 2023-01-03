// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import EnterFullScreen from './components/FullScreen/EnterFullScreen';
import useMediaQuery from './hooks/useMediaQuery';
import AppLayout from './packages/AppLayout';

function App() {
  const matches = useMediaQuery('(max-width:992px)');

  return (
    <React.Fragment>
      {/* <EnterFullScreen className={matches && 'd-none'} /> */}
      <AppLayout />
    </React.Fragment>
  );
}

export default App;
