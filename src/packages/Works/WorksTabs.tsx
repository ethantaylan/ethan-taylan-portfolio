import {
  AiFillFolder,
  AiFillFileText,
} from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';

const WorksTabs = [
  {
    title: 'portoflio',
    folders: [
      {
        chevron: true,
        title: 'projects',
        icon: <AiFillFolder size={18} color="mediumslateblue" />,
        articles: [
          {
            title: 'orinoco.tsx',
            icon: <FaReact size={14} />,
            href: '/about-me/biography'
          },
          {
            title: 'reservia.tsx',
            icon: <FaReact size={14} />,
            href: '/about-me/biography'
          },
          {
            title: 'enemy.tsx',
            icon: <FaReact size={14} />,
            href: '/about-me/biography'
          },
          {
            title: 'la-chouette-agence.tsx',
            icon: <FaReact size={14} />,
            href: '/about-me/biography'
          },
          {
            title: 'oh-my-food.tsx',
            icon: <FaReact size={14} />,
            href: '/about-me/biography'
          },
        ]
      },
    ]
  },
];

export default WorksTabs;
