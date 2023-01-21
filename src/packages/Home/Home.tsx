import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import HomeContent from './HomeContent';

export const Home = () => {
  const matches = useMediaQuery('(min-width:992px)');

  return (
    <React.Fragment>
      <div
        className={`
          ${matches && 'p-4 w-100 justify-content-center align-items-center'} h-100`}
      >
        <HomeContent />
      </div>
    </React.Fragment>
  );
}

export default Home;
