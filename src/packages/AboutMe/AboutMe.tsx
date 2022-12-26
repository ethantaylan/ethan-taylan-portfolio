import React from 'react';
import CodeSnippets from '../../components/CodeSnippets/CodeSnippets';
import './about-me.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import FolderBar from '../../components/Navbar/FolderBar/FolderBar';

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
	const [snippet, setSnippet] = React.useState<boolean>(true);

	const handleCodeSnippet = (active: any) => {
		setSnippet(active);
	};

	const matches = useMediaQuery('(min-width: 768px)');

	const tabs = [
		{
			title: 'personnal-info',
			folders: [
				{
					title: 'biography',
					iconColor: 'red',
					articles: [{ title: 'biography.txt' }],
					cutomIcon: 'test'
				},
				{
					title: 'hobbies',
					iconColor: 'orange',
					articles: [{ title: 'test' }],
				},
				{
					title: 'interests',
					iconColor: 'red',
					articles: [{ title: '' }],
				},
			],
		},
		{
			title: 'contact',
			folders: [
				{
					title: '0766704190',
				},
				{
					title: 'taylanethan@gmail.com',
				},
			],
		},
	];

	return (
		<React.Fragment>
			<div className='d-flex flex-column w-100'>
				<div className='h-100 folder-main-container app-bg w-100'>
					<FolderBar
						tabs={tabs}
						title={'about-me'}
					/>
					{children}
				</div>
			</div>
			<CodeSnippets
				showCodeSnippet={snippet ? true : false}
				className={matches ? 'w-50' : 'w-100'}
				onClose={() => handleCodeSnippet(false)}
			/>
		</React.Fragment>
	);
};

export default AboutMe;
