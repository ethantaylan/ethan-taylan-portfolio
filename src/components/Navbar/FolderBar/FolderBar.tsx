import React from 'react';
import { FolderBarTab } from './FolderBarTab/FolderBarTab';

export interface FolderBarTab {
  title?: string;
  folders?: FolderBarFolder[];
}

export interface FolderBarFolder {
<<<<<<< HEAD
  title?: string;
  articles?: FolderBarArticle[];
  icon: React.ReactElement;
}

export interface FolderBarArticle {
  title: string;
  icon: React.ReactElement;
=======
	title?: string;
	items?: FolderBarItems[];
}

export interface FolderBarItems {
	icon: any;
	title: string;
>>>>>>> fb89b9f1f74d1887d0a57bd5f9061740e77a3653
}

interface FolderBarProps {
  children?: any;
  title: string;
  tabs?: FolderBarTab[] | any;
}

const FolderBar: React.FC<FolderBarProps> = ({ tabs, title }) => {
  return (
    <div className="d-flex flex-column w-100">
      <div className="h-100 folder-main-container app-bg w-100">
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
