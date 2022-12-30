import React from 'react';

interface TextEmplacementProps {
  text: React.ReactElement;
  pathTitle: string;
}

export const TextEmplacement: React.FC<TextEmplacementProps> = ({
  pathTitle,
  text
}) => {
  const stars = (
    <div className="d-flex primary flex-column">
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
      <span>*&nbsp; </span>
    </div>
  );

  return (
    <React.Fragment>
      <div className="d-flex p-4 d-flex w-100 line-height-20 flex-column">
        <h1 className="text-white mb-5">{`/personnal-info/about-me/${pathTitle}`}</h1>
        <div className="d-flex primary">
          {stars}
          {text}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextEmplacement;
