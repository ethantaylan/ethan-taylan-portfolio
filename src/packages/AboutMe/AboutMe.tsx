import React from 'react';
import CodeSnippets from '../../components/CodeSnippets/CodeSnippets';
import FolderBar from '../../components/Navbar/FolderBar/FolderBar';
import useMediaQuery from '../../hooks/useMediaQuery';
import './about-me.scss';
import AboutMeTabs from './AboutMeTabs';

interface AboutMeProps {
  children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
  const [snippet, setSnippet] = React.useState<boolean>(true);

  const matches = useMediaQuery('(min-width: 992px)');

  return (
    <React.Fragment>
      <div className="d-flex flex-column w-100">
        <div className="h-100 folder-main-container app-bg">
          <FolderBar tabs={AboutMeTabs} title={'_about-me'} />
          {children}
        </div>
      </div>
      <CodeSnippets
        showCodeSnippet={snippet ? true : false}
        className={matches ? 'w-50' : 'w-100'}
        onClose={() => setSnippet(false)}
      />
    </React.Fragment>
  );
};

export default AboutMe;
