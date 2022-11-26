import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';

const TitleContainer = styled.div`
	color: ${Generics.primary};
	display: flex;
	padding-top: 12px;
	white-space: nowrap;
	flex-direction: column;
`;

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
	const [isFolderActive, setisFolderActive] = React.useState<boolean>(false);

	const handleActive = () => {
		setisFolderActive(!isFolderActive);
	};

	return (
		<div>
			<TitleContainer>
				<div
					onClick={handleActive}
					className='cursor-pointer d-flex hover flex-row align-items-center mb-2'
				>
					{chevronIconActive && (
						<span className='px-2'>
							{isFolderActive ? (
								<FaChevronDown size={14} />
							) : (
								<FaChevronRight size={14} />
							)}
						</span>
					)}
					{folderIconActive && (
						<AiFillFolder
							size={18}
							color={folderColors}
						/>
					)}
					<span className='d-flex mx-1'>{title}</span>
				</div>
				 {isFolderActive && children}
			</TitleContainer>
		</div>
	);
};

export default Items;
