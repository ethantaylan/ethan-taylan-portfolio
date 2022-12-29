import WorksTabs from '../../../packages/Works/WorksTabs';
import FolderBar from '../../Navbar/FolderBar/FolderBar';

const Portfolio = () => {
  return (
    <div className="d-flex app-bg flex-row h-100 w-100">
      <FolderBar title={'_works'} tabs={WorksTabs} />
    </div>
  );
};

export default Portfolio;
