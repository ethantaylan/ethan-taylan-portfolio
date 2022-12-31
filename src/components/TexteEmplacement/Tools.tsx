import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Tools = () => {
  const text = (
    <span>
      // Tools
      <br />
      <br />
      <h1>
        I use Jest for my frontend tests,
        <br />
        <br />
        Photoshop & FIGMA for my design tools,
        <br />
        <br />
        Git & GitHub for versioning,
        <br />
        <br />
        Netlify for deployment.
      </h1>
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement text={text} pathTitle={'tools.txt'} fileName={'tools.txt'} />
    </React.Fragment>
  );
};

export default Tools;
