import { AiFillFolder, AiOutlineProfile } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { TbTools } from 'react-icons/tb'

const WorksTabs = [

  {
    title: 'portfolio',
    folders: [
      {
        chevron: true,
        title: 'frontend',
        icon: <AiFillFolder size={18} color="darkseagreen" />,
        articles: [
          {
            title: 'orinoco.tsx',
            icon: <FaReact size={16} />,
            href: '//github.com/ethantaylan/orinoco'
          },
          {
            title: 'reservia.tsx',
            icon: <FaReact size={16} />,
            href: '//github.com/ethantaylan/Reservia'
          },
          {
            title: 'la-chouette-agence.tsx',
            icon: <FaReact size={16} />,
            href: '//github.com/ethantaylan/La_chouette_agence'
          },
          {
            title: 'oh-my-food.tsx',
            icon: <FaReact size={16} />,
            href: '//github.com/ethantaylan/Ohmyfood'
          }
        ]
      },
      {
        chevron: true,
        title: 'webdesign',
        icon: <AiFillFolder size={18} color="indianred" />,
        articles: [
          {
            title: 'soon.txt',
            icon: <TbTools size={16} />,
            href: ''
          },
        ]
      },
      {
        chevron: true,
        title: 'others',
        icon: <AiOutlineProfile size={18} color="darkgray" />,
        articles: [
          {
            title: 'soon.txt',
            icon: <TbTools size={16} />,
            href: ''
          },
        ]
      }
    ]
  }
];

export default WorksTabs;
