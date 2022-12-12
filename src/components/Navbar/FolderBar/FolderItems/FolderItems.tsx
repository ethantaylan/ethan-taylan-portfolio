import React from 'react';
import { FaChevronDown, FaChevronRight, FaReact } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';
import './folder-items.scss';

interface ItemsProps {
	title?: any;
	children?: any;
	folderColors?: any;
	folderIconActive?: boolean;
	chevronIconActive?: boolean;
	className?: string;
	telIconActive?: boolean;
	mailIconActive?: boolean;
	number?: string;
	mail?: string;
	codeIconActive?: boolean;
	onClick?: () => any;
}

const AboutMeItems: React.FC<ItemsProps> = ({
	chevronIconActive = true,
	folderIconActive = true,
	codeIconActive = false,
	title,
	folderColors,
	number,
	mail,
	children,
	className,
	onClick,
}) => {
	const [isFolderActive, setisFolderActive] = React.useState<boolean>(false);

	const handleActive = () => {
		setisFolderActive(!isFolderActive);
	};

	return (
		<div className={className}>
			<div className='title-container'>
				<div
					onClick={() => {
						onClick;
						handleActive();
					}}
					className='cursor-pointer d-flex hover align-items-center mb-1'
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
					{codeIconActive && <FaReact size={18} />}
					<span className='d-flex px-2'>{title}</span>
					{number && <span className='px-2'>{number}</span>}
					{mail && <span className='px-2'>{mail}</span>}
				</div>
				{isFolderActive && children}
			</div>
		</div>
	);
};

export default AboutMeItems;
