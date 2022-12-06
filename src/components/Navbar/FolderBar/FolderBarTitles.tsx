import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../Generics';
import { TiArrowSortedDown, TiArrowRight  } from 'react-icons/ti';

const MainTitleContainer = styled.div`
	width: 100%;
`;

const MainTitle = styled.h1`
	width: 100%;
	padding: 10px;
	display: flex;
	color: ${Generics.primary};
	&:hover {
		cursor: ${Generics.cursor};
		color: ${Generics.white};
	}
	@media (width < 768px) {
		padding: 15px;
	}
`;

interface ItemsTitleProps {
	itemsTitle: string;
	className?: string;
	onClick: () => any
}

const ItemsTitle: React.FC<ItemsTitleProps> = ({onClick, className, itemsTitle }) => {
	return (
		<div onClick={onClick}>
			<MainTitleContainer className={className}>
				<MainTitle>
					{itemsTitle}
				</MainTitle>
			</MainTitleContainer>
		</div>
	);
};

export default ItemsTitle;
