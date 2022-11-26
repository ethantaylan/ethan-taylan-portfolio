import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';

const TitleContainer = styled.div`
	color: ${Generics.primary};
	display: flex;
	padding: 12px;
	white-space: nowrap;
	flex-direction: column;
`;

export enum folderColors {
	salmon = '#CC827B',
	green = '#43D9AD',
	blue = '#3A49A4',
}

interface ItemsProps {
	title?: string;
	children: any;
	folderColors?: any;
	folderIconActive?: boolean;
	chevronIconActive?: boolean;
	className?: string;
}

const Items: React.FC<ItemsProps> = ({
	chevronIconActive = true,
	folderIconActive = true,
	title,
	children,
	folderColors,
}) => {
	return (
		<div>
			<TitleContainer>
				<div className='d-flex hover flex-row align-items-center mb-2'>
					{chevronIconActive && (
						<span className='px-1'>
							<FaChevronDown size={10} />
						</span>
					)}
					{folderIconActive && <AiFillFolder color={folderColors} />}
					<span className='d-flex mx-1'>{title}</span>
				</div>
				{children}
			</TitleContainer>
		</div>
	);
};

export default Items;
