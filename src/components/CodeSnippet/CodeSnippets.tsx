import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/avatar.png';
import { BiCommentDetail } from 'react-icons/bi';
import { Generics } from '../Generics';
import { IoIosClose } from 'react-icons/io';
import Code from './Code';

const CodeSnippetsContainer = styled.div`
	width: 85%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

const UserContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const UserAvatar = styled.div`
	height: 35px;
	width: 35px;
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
`;

const CreatedAt = styled.span`
	font-size: 12px;
`;

const DetailsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	align-self: end;
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
	flex-direction: column;
	font-size: 14px;
`;

const CommentsCloseBtn = styled.span`
	color: ${Generics.primary};
`;

const Container = styled.div`
	display: flex;
	color: ${Generics.primary};
	flex-direction: column;
	align-items: center;
	border-left: 3px solid ${Generics.primary};
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

interface CodeSnippetsProps {
	onClick(): void;
}

export const CodeSnippets: React.FC<CodeSnippetsProps> = ({ onClick }) => {

	return (
		<Container>
			<FileCloseContainer>
				<ClosePlusTxt>
					<span>CODESNIPPETS.TXT</span>
					<span className='d-flex cursor-pointer'>
						<IoIosClose
							size={22}
							color={Generics.primary}
							onClick={onClick}
						/>
					</span>
				</ClosePlusTxt>
			</FileCloseContainer>
			<CodeSnippetsContainer>
				<span className='mb-4'>Code Snippets showcase</span>
				<UserContainer>
					<div className='d-flex align-items-center flex-row'>
						<UserAvatar></UserAvatar>
						<div className='d-flex justify-content-between flex-column'>
							<UserName>@ethantaylan</UserName>
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
					<Code />
				</CodeContainer>
				<div className='d-flex w-100 justify-content-between align-items-start mt-3 px-3'>
					<Comments>
						"My work here was 5 months ago. It was for the project called Enemy. A
						World of Warcraft guild".
						<CreatedAt>// Created 5 months ago</CreatedAt>
					</Comments>

					<CommentsCloseBtn>
						<IoIosClose
							size={22}
							color={Generics.primary}
							className="cursor-pointer"
						/>
					</CommentsCloseBtn>
				</div>
			</CodeSnippetsContainer>
		</Container>
	);
};

export default CodeSnippets;
