import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import LeftContent from './LeftContent/LeftContent';

function Home() {
  const matches = useMediaQuery('(min-width:992px)');

  return (
    <React.Fragment>
      <div
        className={`
          ${matches && 'p-4 w-100 justify-content-center align-items-center'} h-100`}
      >
        <LeftContent />
      </div>
    </React.Fragment>
  );
}

export default Home;
