import React from 'react';

interface CodeSnippetSpanProps {
	color: any;
	children: any;
}

export const CodeSnippetSpan: React.FC<CodeSnippetSpanProps> = ({
	children,
	color,
}) => {
	return <span style={{color}}>{children}</span>;
};

export default CodeSnippetSpan;
