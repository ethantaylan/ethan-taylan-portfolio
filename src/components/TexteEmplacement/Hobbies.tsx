import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Hobbies = () => {
  const text = (
    <span>
      Hobbies
      <br />
      <br />
      <h1>
        I like to playing football with my friends.
        <br />
        <br />
        Also, I play a lot of strategy game like League of Legends, my highest
        rank is diamond 3 in season 4.
        <br />
        <br />I also do a lot of sport, fitness and running principally.
      </h1>
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement
        text={text}
        pathTitle={'hobbies.txt'}
        fileName={'hobbies.txt'}
      />
    </React.Fragment>
  );
};

export default Hobbies;
