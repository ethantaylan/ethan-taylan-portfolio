import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import Code from './Code/Code';
import './code-snippet.scss';

interface CodeSnippetsProps {
	onClose: () => any;
	className: string;
	showCodeSnippet: boolean;
}

export const CodeSnippets: React.FC<CodeSnippetsProps> = ({
	className,
	onClose,
	showCodeSnippet
}) => {
	const [isDetailActive, setIsDetailActive] = React.useState<boolean>(false);

	const detailHandler = () => {
		setIsDetailActive(!isDetailActive);
	};

	return (
		<div className={`${className} ${showCodeSnippet ? '' : 'd-none'} app-bg all-container`}>
			<h1 className='p-4'> // Code snippets showcase</h1>
			
			<div className='snippet-container'>
				<div className='d-flex w-100 mb-4 justify-content-between align-items-center'>
					<span style={{ color: '#ffffff' }}>
						/code-snippets.tsx
						<br /> <br />
					</span>
					<IoIosClose
						onClick={() => onClose()}
						size={22}
						className='close-icon hover'
					/>
				</div>

				<div className='user-container'>
					<div className='d-flex align-items-center flex-row'>
						<div className='user-avatar'></div>
						<div className='d-flex justify-content-between flex-column'>
							<span className='user-name'>@ethantaylan</span>
						</div>
					</div>
					<div onClick={detailHandler} className='cursor-pointer hover detail-container'>
						<BiCommentDetail
							className='mx-2'
							size={'16px'}
						/>

						<span>details</span>
					</div>
				</div>
				<div className='code-container'>
					<Code />
				</div>
				<div
					className={`d-${
						isDetailActive ? 'flex' : 'none'
					} w-100 justify-content-between align-items-start mt-3 px-3`}
				>
					<span className='detail'>
						A little piece of code about my portfolio. I used scss, React and
						TypeScript.
						<span className='created-at'>// Created 5 months ago</span>
					</span>

					<IoIosClose
						onClick={() => setIsDetailActive(false)}
						size={22}
						className='IoIosClose'
					/>
				</div>
			</div>
		</div>
	);
};

export default CodeSnippets;