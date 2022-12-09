import React from 'react';
import CodeSnippetImg from '../../../assets/code-snippet.png';
import './right-content.scss'

interface RightContentProps {
	className: string;
}

const RightContent: React.FC<RightContentProps> = ({ className }) => {
	return (
		<div className={`${'h-100 w-100'} ${className}`}>
			<div className='right-content-container'>
				<div className='background'>
					<div className='code-snippet-container'>
						<img className='computer-img' src={CodeSnippetImg} alt="Computer image" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightContent;
