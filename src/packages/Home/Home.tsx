import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import LeftContent from './LeftContent/LeftContent';

function Home() {
  const matches = useMediaQuery('(min-width:992px)');

  return (
    <React.Fragment>
      <div className="h-100 w-100 d-flex">
        <LeftContent />
      </div>
    </React.Fragment>
  );
}

export default Home;
