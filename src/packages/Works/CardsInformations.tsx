import LaChouetteAgence from '../../assets/Projects/lachouetteagence.png';
import OhMyFood from '../../assets/Projects/ohmyfood.png';
import Orinoco from '../../assets/Projects/orinoco.png';
import Reservia from '../../assets/Projects/reservia.png';

export const projectCards = [
  {
    title: 'orinoco',
    number: '1',
    image: Orinoco,
    description: 'UX/UI responsive',
    url: '',
    children: <img className="w-100" src={Orinoco} alt="Orinoco img" />,
    isModalActive: true
  },
  {
    title: 'la-chouette-agence',
    number: '2',
    image: LaChouetteAgence,
    description: 'UX/UI responsive',
    url: '//github.com/ethantaylan/La_chouette_agence',
    children: (
      <img className="w-100" src={LaChouetteAgence} alt="Orinoco img" />
    ),
    isModalActive: true
  },
  {
    title: 'reservia',
    number: '3',
    image: Reservia,
    description: 'UX/UI responsive',
    url: '//github.com/ethantaylan/Reservia',
    children: <img className="w-100" src={Reservia} alt="Reservia img" />,
    isModalActive: true
  },
  {
    title: 'oh-my-food',
    number: '4',
    image: OhMyFood,
    description: 'UX/UI responsive',
    url: '//github.com/ethantaylan/Ohmyfood',
    children: <img className="w-100" src={OhMyFood} alt="OhMyFood img" />,
    isModalActive: true
  }
];
