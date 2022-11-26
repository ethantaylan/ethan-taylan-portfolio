import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.png';
import { BiCommentDetail } from 'react-icons/bi';
import { Generics } from '../Generics';
import { IoIosClose } from 'react-icons/io';

const CodeSnippetsContainer = styled.div`
	max-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const UserContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const UserAvatar = styled.div`
	height: 40px;
	width: 40px;
	background-image: url(${Avatar});
	background-size: contain;
	border-radius: 100%;
	margin-right: 8px;
	border: 1px solid #5b87ff8f;
`;

const UserName = styled.div`
	display: flex;
	width: 50%;
	flex-direction: column;
	color: #5b86ff;
	font-weight: bold;
	margin-bottom: 5px;
`;

const CreatedAt = styled.span`
	font-size: 12px;
`;

const DetailsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;
const CodeContainer = styled.div`
	height: 200px;
	width: 100%;
	background-color: #010c15;
	border-radius: 12px;
	border: 1px solid ${Generics.secondary};
`;

const Comments = styled.span`
	width: 85%;
	display: flex;
	justify-content: space-between;
	line-height: 20px;
`;

const CommentsCloseBtn = styled.span`
	color: ${Generics.primary};
`;

function CodeSnippets() {
	return (
		<CodeSnippetsContainer>
			<span>Code Snippets showcase</span>
			<UserContainer>
				<div className='d-flex flex-row'>
					<UserAvatar></UserAvatar>
					<div className='d-flex justify-content-between flex-column'>
						<UserName>@ethantaylan</UserName>
						<CreatedAt>Created 5 months ago</CreatedAt>
					</div>
				</div>
				<DetailsContainer className='cursor-pointer hover '>
					<BiCommentDetail
						className='mx-2'
						size={'16px'}
					/>

					<span>details</span>
				</DetailsContainer>
			</UserContainer>
			<CodeContainer />
			<div className='d-flex w-100 justify-content-between align-items-start mt-3 px-3'>
				<Comments>
					"My work here was 5 months ago. It was for the project called Enemy". A
					World of Warcraft guild.
				</Comments>
				<CommentsCloseBtn>
					<IoIosClose
						size={22}
						color={Generics.primary}
					/>
				</CommentsCloseBtn>
			</div>
		</CodeSnippetsContainer>
	);
}

export default CodeSnippets;
