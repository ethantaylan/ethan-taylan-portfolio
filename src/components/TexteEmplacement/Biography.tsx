import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Biography = ({}) => {
  
  const text = (
    <span>
      About me
      <br />
      <span>soon</span>
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement text={text} pathTitle={'biography.txt'} />
    </React.Fragment>
  );
};

export default Biography;
