import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Hobbies = () => {
  const text = (
    <span>
      // Hobbies
      <br />
      <br />
      <h1>
        I like to play football with my friends.
        <br />
        <br />
        Also, I play a lot of strategy games like League of Legends, my highest
        rank is diamond 2.
        <br />
        <br />I Like to run when it's sunny :lol:.
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
