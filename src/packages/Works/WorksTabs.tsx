import {
  AiFillFolder,
  AiFillFileText,
  AiFillInstagram,
  AiFillLinkedin
} from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const WorksTabs = [
  {
    title: 'user-interface',
    folders: [
      {
        chevron: true,
        title: 'about-me',
        icon: <AiFillFolder size={18} color="mediumslateblue" />,
        articles: [
          {
            title: 'biography.txt',
            icon: <AiFillFileText size={14} />,
            href: '/about-me/biography'
          },
          {
            title: 'education.txt',
            icon: <AiFillFileText size={14} />,
            href: '/about-me/carreer'
          },
          { title: 'hobbies.txt', icon: <AiFillFileText size={14} /> }
        ]
      },
      {
        chevron: true,
        title: 'pro-carreer',
        icon: <AiFillFolder size={18} color="teal" />,
        articles: [
          { title: 'army.txt', icon: <AiFillFileText size={14} /> },
          { title: 'mecanician.txt', icon: <AiFillFileText size={14} /> },
          { title: 'developer.txt', icon: <AiFillFileText size={14} /> },
          { title: 'resume.pdf', icon: <AiFillFileText size={14} /> }
        ]
      }
    ]
  },
  {
    title: 'frontend'
  }
];

export default WorksTabs;
