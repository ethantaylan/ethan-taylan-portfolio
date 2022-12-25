import { codeSnippetsColors } from '../code-snippets-colors';
import CodeSnippetSpan from '../CodeSnippetSpan';

const space = <span style={{ color: '#010D15' }}>{'__'}</span>;

const Code = () => {
	return (
		<>
			<div className='mb-2'>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'{'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.white}>
					{'chevronIconActive'}
				</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{' &&'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>{' ('}</CodeSnippetSpan>
				<br />
			</div>
			{space}
			<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'<'}</CodeSnippetSpan>
			<CodeSnippetSpan color={codeSnippetsColors.red}>{'span'}</CodeSnippetSpan>
			<CodeSnippetSpan color={codeSnippetsColors.purple}>
				{' className'}
			</CodeSnippetSpan>
			<CodeSnippetSpan color={codeSnippetsColors.cyan}>{" = '"}</CodeSnippetSpan>
			<CodeSnippetSpan color={codeSnippetsColors.green}>{'px-2'}</CodeSnippetSpan>
			<CodeSnippetSpan color={codeSnippetsColors.cyan}>{"'"}</CodeSnippetSpan>
			<br />
			<div className='mt-2'>
				{space}
				{space}
				{space}
				<CodeSnippetSpan color={codeSnippetsColors.purple}>{'{'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.white}>
					{'isFolderActive '}
				</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{' ? '}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{' ( '}</CodeSnippetSpan>
			</div>
			<div className='mt-2'>
				{space}
				{space}
				{space}
				{space}
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'<'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>
					{'FaChevronDown'}
				</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.purple}>
					{' size'}
				</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'='}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>{'{'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.orange}>{'14'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>{'}'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{' />'}</CodeSnippetSpan>
				<div className='mt-2'>
					{space}
					{space}
					<CodeSnippetSpan color={codeSnippetsColors.cyan}>
						{') : ('}
					</CodeSnippetSpan>
				</div>
				<br />
			</div>
			<div className='mb-2'>
				{space}
				{space}
				{space}
				{space}
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'<'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>
					{'FaChevronRight'}
				</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.purple}>
					{' size'}
				</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'='}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>{'{'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.orange}>{'14'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.yellow}>{'}'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{' />'}</CodeSnippetSpan>
			</div>
			<div className='mt-2'>
				{space}
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'</'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.red}>{'span'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'>'}</CodeSnippetSpan>
			</div>
			<div className='mt-2'>
				{space}
				{space}
				<CodeSnippetSpan color={codeSnippetsColors.cyan}>{')'}</CodeSnippetSpan>
				<CodeSnippetSpan color={codeSnippetsColors.purple}>{'}'}</CodeSnippetSpan>
				<br />
			</div>
			<CodeSnippetSpan color={codeSnippetsColors.cyan}>{'}'}</CodeSnippetSpan>


		</>
	);
};

export default Code;
