import React from 'react';
import CodeSnippets from '../../components/CodeSnippets/CodeSnippets';
import './about-me.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import FolderBar from '../../components/Navbar/FolderBar/FolderBar';
import { FcFolder } from 'react-icons/fc';
import { FaFileCode, FaFolder } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';

interface AboutMeProps {
  children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
  const [snippet, setSnippet] = React.useState<boolean>(true);

  const handleCodeSnippet = (active: any) => {
    setSnippet(active);
  };

  const matches = useMediaQuery('(min-width: 768px)');

  const tabs = [
    {
      title: 'personnal-info',
      folders: [
        {
          title: 'biography',
          icon: <AiFillFolder size={20} color="orange" />,
          articles: [{ title: 'biography.txt', icon: <FaFileCode /> }]
        },
        {
          title: 'hobbies',
          icon: <AiFillFolder size={20} color="salmon" />,
        },
        {
          title: 'interests',
          icon: <AiFillFolder size={20} color="cyan" />,
          articles: [{ title: 'Article 1' }, { title: 'Article 2' }]
        }
      ]
    },
    {
      title: 'contact',
      folders: [
        {
          title: '0766704190'
        },
        {
          title: 'taylanethan@gmail.com'
        }
      ]
    }
  ];

  return (
    <React.Fragment>
      <div className="d-flex flex-column w-100">
        <div className="h-100 folder-main-container app-bg w-100">
          <FolderBar tabs={tabs} title={'about-me'} />
          {children}
        </div>
      </div>
      <CodeSnippets
        showCodeSnippet={snippet ? true : false}
        className={matches ? 'w-50' : 'w-100'}
        onClose={() => handleCodeSnippet(false)}
      />
    </React.Fragment>
  );
};

export default AboutMe;
