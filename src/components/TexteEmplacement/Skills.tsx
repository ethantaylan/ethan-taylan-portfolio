import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Skills = () => {
  const text = (
    <span>
      // Skills
      <br />
      <br />
      <h1>
        - HTML
        <br />
        <br />
        - CSS
        <br />
        <br />
        - SASS
        <br />
        <br />
        - STYLED-COMPONENTS
        <br />
        <br />
        - JAVASCRIPT
        <br />
        <br />
        - REACTJS
        <br />
        <br />- TYPESCRIPT
      </h1>
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement text={text} pathTitle={'skills.txt'} fileName={'skills.txt'} />
    </React.Fragment>
  );
};

export default Skills;
