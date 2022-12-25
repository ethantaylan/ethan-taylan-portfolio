import React from 'react';
import './FolderBarItemsTitle.scss';

interface ItemsTitleProps {
	itemsTitle: string;
	className?: string;
	onClick?: () => any;
}

const ItemsTitle: React.FC<ItemsTitleProps> = ({
	onClick,
	className,
	itemsTitle,
}) => {
	return (
		<div onClick={onClick}>

		</div>
	);
};

export default ItemsTitle;
