import React from 'react';
import './FolderBarTitles.scss'

interface ItemsTitleProps {
	itemsTitle: string;
	className?: string;
	onClick?: () => any
}

const ItemsTitle: React.FC<ItemsTitleProps> = ({onClick, className, itemsTitle }) => {
	return (
		<div onClick={onClick}>
			<div className={`${className} w-100`}>
				<h1 className='folder-bar-title'>
					{itemsTitle}
				</h1>
			</div>
		</div>
	);
};

export default ItemsTitle;
