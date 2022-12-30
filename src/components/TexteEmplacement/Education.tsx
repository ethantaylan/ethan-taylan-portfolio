import React from 'react';
import TextEmplacement from './TextEmplacement';

export const Education = ({}) => {
  
  const text = (
    <span>
      About me
      <br />
      I'm a junior frontend developer using React and TypeScript. <br />
      Great understanding of OOP principles, Data Structures, Algorithms, Design
      Patterns. <br />
      Experience in responsive and mobile WEB development.
      <br />
      Works with client-side and distributed development teams.
      <br />
      Experience with web systems running on various OS and browsers, including
      older versions.
      <br />
      Strong understanding of CSS pre-processors (SASS / SCSS). <br />
      Also, have experience working within a team environment using scrum
      methodologie.
    </span>
  );

  return (
    <React.Fragment>
      <TextEmplacement text={text} pathTitle={'education.txt'} />
    </React.Fragment>
  );
};

export default Education;
