import './works.scss';

import FolderBar from '../../../Navbar/FolderBar/FolderBar';

const Portfolio = () => {
	return (
		<div className='d-flex app-bg flex-row h-100 w-100'>
			<FolderBar
				folderBarTitle={'_works'}
				children={<Portfolio />}
				title={'training'}
				title2={'professional'}
				itemTitle={'logos'}
				itemTitle2={'mockups'}
				itemTitle3={''}
				itemTitle4={''}
				itemTitle5={''}
				itemTitle6={''}
				subItemTitle={'training'}
				subItemTitle2={'profesionnal'}
				subItemTitle3={'test'}
				subItemTitle4={'instagram'}
				subItemTitle5={'linkedin'}
				subItemTitle6={'github'}
			/>
		</div>
	);
};

export default Portfolio;
