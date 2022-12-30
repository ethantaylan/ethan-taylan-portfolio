import {
  AiFillFilePdf,
  AiFillFileText,
  AiFillFolder,
  AiFillInstagram,
  AiFillLinkedin
} from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const AboutMeTabs = [
  {
    title: 'personnal-info',
    folders: [
      {
        chevron: true,
        title: 'about-me',
        icon: <AiFillFolder size={18} color="mediumslateblue" />,
        articles: [
          {
            title: 'biography.txt',
            icon: <AiFillFileText size={16} />,
            href: '/about-me/biography'
          },
          {
            title: 'education.txt',
            icon: <AiFillFileText size={16} />,
            href: '/about-me/education'
          },
          { title: 'hobbies.txt', icon: <AiFillFileText size={16} />, href: '/about-me/hobbies' }
        ]
      },
      {
        chevron: true,
        title: 'pro-carreer',
        icon: <AiFillFolder size={18} color="teal" />,
        articles: [
          {
            title: 'developer.txt',
            icon: <AiFillFileText size={16} />,
            href: '/about-me/developer'
          },
          { title: 'resume.pdf', icon: <AiFillFilePdf size={16} /> }
        ]
      },
      {
        chevron: true,
        title: 'socials',
        icon: <AiFillFolder size={18} color="tan" />,
        articles: [
          {
            title: 'instagram',
            icon: <AiFillInstagram size={16} />,
            href: '//www.instagram.com/et.tln/?hl=fr'
          },
          {
            title: 'github',
            icon: <FaGithubSquare size={16} />,
            href: '//github.com/ethantaylan'
          },
          {
            title: 'linkedin',
            icon: <AiFillLinkedin size={16} />,
            href: '//www.linkedin.com/in/ethan-taylan-697831199/'
          }
        ]
      }
    ]
  },
  {
    chevron: false,
    title: 'contact',
    folders: [
      {
        icon: (
          <span className="ms-2">
            <BsFillTelephoneFill size={16} />
          </span>
        ),
        title: '0766704190'
      },
      {
        chevron: false,
        title: 'taylanethan@gmail.com',
        icon: (
          <span className="ms-2">
            <IoMdMail size={16} />
          </span>
        )
      }
    ]
  }
];

export default AboutMeTabs;
