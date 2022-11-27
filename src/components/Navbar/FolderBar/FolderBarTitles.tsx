import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../Generics';
import { TiArrowSortedDown } from 'react-icons/ti';

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
`;

interface ItemsTitleProps {
	itemsTitle: string;
    className?: string;
}

const ItemsTitle: React.FC<ItemsTitleProps> = ({className, itemsTitle }) => {
	return (
		<div>
			<MainTitleContainer className={className}>
				<MainTitle>
					<TiArrowSortedDown className='mx-1' />
					{itemsTitle}
				</MainTitle>
			</MainTitleContainer>
		</div>
	);
};

export default ItemsTitle;
