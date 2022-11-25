import React from 'react';
import styled from 'styled-components';

function Square({title}) {

	const Hello = styled.h1`
		font-size: ${title ? '16px' : '12px'};
	`;

	return <div>{title}</div>;
}

export default Square;
