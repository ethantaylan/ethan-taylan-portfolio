import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../Generics';
import { TiArrowSortedDown, TiArrowRight  } from 'react-icons/ti';

const MainTitleContainer = styled.div`
	width: 100%;
	border-bottom: 1px solid ${Generics.secondary};
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
}

const ItemsTitle: React.FC<ItemsTitleProps> = ({ className, itemsTitle }) => {
	return (
		<div>
			<MainTitleContainer className={className}>
				<MainTitle>
					<TiArrowRight className='mx-1' />
					{itemsTitle}
				</MainTitle>
			</MainTitleContainer>
		</div>
	);
};

export default ItemsTitle;
