import { AiFillFolder } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';

const WorksTabs = [
  {
    title: 'portfolio',
    folders: [
      {
        chevron: true,
        title: 'projects',
        icon: <AiFillFolder size={18} color="mediumslateblue" />,
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
      }
    ]
  }
];

export default WorksTabs;
