import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';

function Home() {
  const matches = useMediaQuery('(min-width:992px)');

  return (
    <React.Fragment>
      <div className="w-100 h-100 app-bg d-flex justify-content-center">
        <div className="h-100 w-100 d-flex">
          <LeftContent />
          {matches && <RightContent />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
