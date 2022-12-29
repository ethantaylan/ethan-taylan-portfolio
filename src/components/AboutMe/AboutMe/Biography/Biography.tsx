import AboutMeContents from './Content/AboutMeContent';

const aboutMeText = (
	<span>
		<span style={{ color: '#ffffff' }}>
			/personal-info/biography.txt
			<br /> <br />
		</span>
		<div className='d-flex'>
			<div className='d-flex flex-column'>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
				<span>*&nbsp; </span>
			</div>
			About me<br />
			I'm a junior frontend developer using React and TypeScript. <br />
			Great understanding of OOP principles, Data Structures, Algorithms, Design
			Patterns. <br />
			Experience in responsive and mobile WEB development.
			<br />
			Works with client-side and distributed development teams.
			<br />
			Experience with web systems running on various OS and browsers, including
			older versions.
			<br />
			Strong understanding of CSS pre-processors (SASS / SCSS). <br />
			Also, have experience working within a team environment using scrum
			methodologie.
		</div>
	</span>
);

export const Biography = () => {
	return (
		<AboutMeContents
			text={aboutMeText}
			tabTitle='BIOGRAPHY.TXT'
		/>
	);
};

export default Biography;
