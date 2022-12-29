import { AiFillFolder, AiFillFileText, AiFillInstagram, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
              href: '/about-me/carreer'
            },
            { title: 'hobbies.txt', icon: <AiFillFileText size={16} /> }
          ]
        },
        {
          chevron: true,
          title: 'pro-carreer',
          icon: <AiFillFolder size={18} color="teal" />,
          articles: [
            { title: 'developer.txt', icon: <AiFillFileText size={16} /> },
            { title: 'resume.pdf', icon: <AiFillFilePdf size={16} /> }
          ]
        },
        {
          chevron: true,
          title: 'socials',
          icon: <AiFillFolder size={18} color="tan" />,
          articles: [
            { title: 'instagram', icon: <AiFillInstagram size={16} /> },
            { title: 'github', icon: <FaGithubSquare size={16} /> },
            { title: 'linkedin', icon: <AiFillLinkedin size={16} /> }
          ]
        }
      ]
    },
    {
      chevron: false,
      title: 'contact',
      folders: [
        {
          icon: <BsFillTelephoneFill size={16} />,
          title: '0766704190'
        },
        {
          chevron: false,
          title: 'taylanethan@gmail.com',
          icon: <IoMdMail size={16} />
        }
      ]
    }
  ];

  export default AboutMeTabs