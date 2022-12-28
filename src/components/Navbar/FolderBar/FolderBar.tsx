import React from 'react';
import { FolderBarTab } from './FolderBarTab/FolderBarTab';

export interface FolderBarTab {
  title?: string;
  folders?: FolderBarFolder[];
}

export interface FolderBarFolder {
  title?: string;
  articles?: FolderBarArticle[];
  icon: React.ReactElement;
  chevron: boolean;
}

export interface FolderBarArticle {
  title: string;
  icon: React.ReactElement;
  href: string;
}

interface FolderBarProps {
  children?: any;
  title: string;
  tabs?: FolderBarTab[] | any;
}

const FolderBar: React.FC<FolderBarProps> = ({ tabs, title }) => {
  return (
    <div className="d-flex flex-column">
      <div className="h-100 folder-main-container app-bg">
        <div className="folder-container">
          <h1 className="about-me-title">{title}</h1>
          {tabs?.map((tab: FolderBarTab, index: number) => (
              <FolderBarTab key={index} tab={tab} />
          ))}
        </div>
      </div>
      {/* {children} */}
    </div>
  );
};

export default FolderBar;
