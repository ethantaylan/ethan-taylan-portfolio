import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, FolderColors } from '../../components/Colors';
import { FaChevronRight } from 'react-icons/fa';

const TitleContainer = styled.span`
	color: ${Colors.primary};
	display: flex;
	align-items: center;
	padding: 12px;
	white-space: nowrap;
	&:hover {
		color: ${Colors.white};
		cursor: ${Colors.cursor};
	}
`;

interface ItemsProps {
	title: string;
	children: any;
}

const Items: React.FC<ItemsProps> = ({ title, children }) => {
	return (
		<div>
			<TitleContainer>
				<span className='px-1'>
					<FaChevronRight size={10} />
				</span>
				{children}
                <span className='mx-2'>{title}</span>
			</TitleContainer>
		</div>
	);
};

export default Items;
