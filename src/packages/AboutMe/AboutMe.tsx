import React from 'react';
import CodeSnippets from '../../components/CodeSnippets/CodeSnippets';
import './about-me.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import FolderBar from '../../components/Navbar/FolderBar/FolderBar';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillFileText, AiFillFolder, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';

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
          title: 'about-me',
          icon: <AiFillFolder size={18} color="mediumslateblue" />,
          articles: [
            { title: 'biography.txt', icon: <AiFillFileText size={14} />, href: '/about-me/biography' },
            { title: 'education.txt', icon: <AiFillFileText size={14} />, href: '/about-me/carreer'},
            { title: 'hobbies.txt', icon: <AiFillFileText size={14} /> }
          ]
        },
        {
          title: 'pro-carreer',
          icon: <AiFillFolder size={18} color="teal" />,
          articles: [
            { title: 'army.txt', icon: <AiFillFileText size={14} /> },
            { title: 'mecanician.txt', icon: <AiFillFileText size={14} /> },
            { title: 'developer.txt', icon: <AiFillFileText size={14} /> },
            { title: 'resume.pdf', icon: <AiFillFileText size={14} /> },


          ]
        },
        {
          title: 'socials',
          icon: <AiFillFolder size={18} color="tan" />,
          articles: [
            { title: 'instagram', icon: <AiFillInstagram size={14} />, },
            { title: 'github', icon: <FaGithubSquare size={14} /> },
            { title: 'linkedin', icon: <AiFillLinkedin size={14} /> }

          ]
        }
      ]
    },
    {
      title: 'contact',
      folders: [
        {
          icon: <BsFillTelephoneFill size={14} />,
          title: '0766704190'
        },
        {
          title: 'taylanethan@gmail.com',
          icon: <IoMdMail size={14} />
        }
      ]
    }
  ];

  return (
    <React.Fragment>
      <div className="d-flex flex-column w-100">
        <div className="h-100 folder-main-container app-bg">
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
