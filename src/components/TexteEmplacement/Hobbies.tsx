import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Hobbies = ({}) => {
  const text = (
    <span>
      Hobbies
      <br />
      <br />
      <h1>
        I like to playing football with my friends. Also, I play a lot of League
        of Legends, my highest rank is diamond 3 in season 4.
      </h1>
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement text={text} pathTitle={'hobbies.txt'} />
    </React.Fragment>
  );
};

export default Hobbies;
