import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Education = ({}) => {
  const text = (
    <span>
      // Education
      <br />
      <br />
      2022 : full-stack development degree
      <br />
      <br />
      2020 : front-end development degree
      <br />
      <br />
      2015 : motor vehicles degree
      <br />
      <br />
      2013 : infographics degree
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement
        path="/about-me"
        text={text}
        pathTitle={'education.txt'}
        fileName={'education.txt'}
      />
    </React.Fragment>
  );
};

export default Education;
