import React from 'react';
import { FolderBarTab } from './FolderBarTab/FolderBarTab';

export interface FolderBarTab {
  title?: string;
  folders?: FolderBarFolder[];
  children: any
  onClick?: () => void;
}

export interface FolderBarFolder {
  title?: string;
  articles?: FolderBarArticle[];
  icon: React.ReactElement;
  chevron: boolean;
  onClick?: () => void;

}

export interface FolderBarArticle {
  title: string;
  icon: React.ReactElement;
  href: string;
  resume: string;
  onClick: () => void;
}

interface FolderBarProps {
  title: string;
  tabs: FolderBarTab[] | any;
  onClick?: () => void;

}

const FolderBar: React.FC<FolderBarProps> = ({ tabs, title, onClick }) => {
  return (
    <div className="d-flex flex-column">
      <div className="h-100 folder-main-container app-bg">
        <div className="folder-container">
          <h1 className="about-me-title">{title}</h1>
          {tabs?.map((tab: FolderBarTab, index: number) => (
            <FolderBarTab key={index} onClick={onClick} tab={tab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolderBar;
