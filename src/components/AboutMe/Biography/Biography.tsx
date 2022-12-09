import AboutMeContents from '../Content/AboutMeContent';

const aboutMeText = (
	<span>
		* About me <br />
		* I have 5 years of еxperience in web <br />
		* development lorem ipsum dolor sit amet, <br />
		* consectetur adipiscing elit, sed do eiusmod
		<br />
		* tempor incididunt ut labore et dolore
		<br />
		* magna aliqua. Ut enim ad minim veniam,
		<br />
		* quis nostrud exercitation ullamco laboris
		<br />
		* nisi ut aliquip ex ea commodo consequat.
		<br />
		* Duis aute irure dolor in reprehenderit in
		<br />
		*<br />
		* Duis aute irure dolor in reprehenderit in
		<br />
		* voluptate velit esse cillum dolore eu fugiat <br />
		* nulla pariatur. Excepteur sint occaecat <br />
		* officia deserunt mollit anim id est laborum.
		<br />
		* officia deserunt mollit anim id est laborum */
		<br />
	</span>
);

export const Bio = () => {
	return (
		<AboutMeContents
			text={aboutMeText}
			tabTitle='BIOGRAPHY.TXT'
		/>
	);
};

export default Bio;
