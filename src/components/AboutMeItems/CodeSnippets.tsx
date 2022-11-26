import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.png';
import { BiCommentDetail } from 'react-icons/bi';
import { Generics } from '../Generics';
import { IoIosClose } from 'react-icons/io';

const CodeSnippetsContainer = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
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
    padding: 15px;
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

const Container = styled.div`
	display: flex;
	color: ${Generics.primary};
	flex-direction: column;
	align-items: center;
`;

const FileCloseContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: ${Generics.primary};
	align-items: center;
	border-left: 1px solid ${Generics.secondary};
	align-self: flex-start;
	border-bottom: 1px solid ${Generics.secondary};
`;

const ClosePlusTxt = styled.div`
	width: 250px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 6px;
	border-right: 1px solid ${Generics.secondary};
`;

function CodeSnippets() {
	return (
		<Container>
			<FileCloseContainer>
				<ClosePlusTxt>
					<span>BIO.TXT</span>
					<span className='d-flex cursor-pointer'>
						<IoIosClose
							size={22}
							color={Generics.primary}
						/>
					</span>
				</ClosePlusTxt>
			</FileCloseContainer>
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
				<CodeContainer>
					<h1>test</h1>
				</CodeContainer>
				<div className='d-flex w-100 justify-content-between align-items-start mt-3 px-3'>
					<Comments>
						"My work here was 5 months ago. It was for the project called Enemy. A
						World of Warcraft guild".
					</Comments>
					<CommentsCloseBtn>
						<IoIosClose
							size={22}
							color={Generics.primary}
						/>
					</CommentsCloseBtn>
				</div>
			</CodeSnippetsContainer>
		</Container>
	);
}

export default CodeSnippets;
