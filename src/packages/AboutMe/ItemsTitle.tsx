import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from '../../components/Colors';
import { TiArrowSortedDown } from 'react-icons/ti';

const MainTitleContainer = styled.div`
	width: 100%;
	border-bottom: 1px solid ${Colors.secondary};
`;

const MainTitle = styled.h1`
	width: 100%;
	padding: 10px;
	display: flex;
	color: ${Colors.primary};
	&:hover {
		cursor: ${Colors.cursor};
		color: ${Colors.white};
	}
`;

const GlobalStyle = createGlobalStyle`
  .my-border-top {
    border-top: 1px solid ${Colors.secondary}
}`;

interface ItemsTitleProps {
	itemsTitle: string;
    className?: string;
}

const ItemsTitle: React.FC<ItemsTitleProps> = ({className, itemsTitle }) => {
	return (
		<div>
            <GlobalStyle />
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
