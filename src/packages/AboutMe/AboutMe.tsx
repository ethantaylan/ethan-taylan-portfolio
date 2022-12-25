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

	return (
		<React.Fragment>
			{/* <div
						className={isContactMenuActive ? 'd-block my-border-bottom' : 'd-none'}
					>
						<FolderBarItems
							className='p-2'
							mail='taylanethan@gmail.com'
							mailIconActive={true}
							telIconActive={false}
							chevronIconActive={false}
							folderIconActive={false}
							title={<IoMailSharp size={16} />}
						/>
						<FolderBarItems
							className='p-2'
							number='+33766704190'
							telIconActive={true}
							mailIconActive={false}
							chevronIconActive={false}
							folderIconActive={false}
							title={<BsFillTelephoneFill size={16} />}
						/>
					</div> */}
			<div className='d-flex flex-column w-100'>
				<div className='h-100 folder-main-container app-bg w-100'>
					<FolderBar
						tabs={[
							{
								title: 'personnal-info',
								folders: [
									{
										title: 'test',
										iconColor: 'orange',
										articles: [{ title: 'test' }],
									},
									{
										title: 'test',
										iconColor: 'orange',
										articles: [{ title: 'test' }],
									},
								],
							},
							{
								title: 'contact',
								folders: [
									{
										title: '0766704190',
										iconColor: 'blue',
										articles: [{ title: 'test' }],
									},
									{
										title: 'test',
										iconColor: 'orange',
										articles: [{ title: 'test' }],
									},
								],
							},
						]}
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
