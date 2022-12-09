import React from 'react';
import styled from 'styled-components';
import { BiCommentDetail } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import Code from './Code';
import './code-snippet.scss'

interface CodeSnippetsProps {
	onClick(): void;
}

export const CodeSnippets: React.FC<CodeSnippetsProps> = ({ onClick }) => {
	const [isDetailActive, setIsDetailActive] = React.useState<boolean>(false);

	const detailHandler = () => {
		setIsDetailActive(!isDetailActive)
	}

	return (
		<div className='app-bg all-container'>
			<div className='snippet-container'>
				<span className='mb-4'>// Code Snippets showcase</span>
				<div className='user-container'>
					<div className='d-flex align-items-center flex-row'>
						<div className='user-avatar'></div>
						<div className='d-flex justify-content-between flex-column'>
							<span className='user-name'>@ethantaylan</span>
						</div>
					</div>
					<div className='cursor-pointer hover detail-container'>
						<BiCommentDetail
							className='mx-2'
							size={'16px'}
						/>

						<span onClick={detailHandler}>details</span>
					</div>
				</div>
				<div className='code-container'>
					<Code />
				</div>
				<div className={`d-${isDetailActive ? 'flex' : 'none'} w-100 justify-content-between align-items-start mt-3 px-3`}>
					<span className='detail'>
							A little piece of code about my portfolio. I used styled-components, scss, React and TypeScript.
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
