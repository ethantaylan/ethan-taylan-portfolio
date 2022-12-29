import React from 'react';
import { FolderBarTab as FolderBarTabModel } from '../FolderBar';
import { FolderBarFolder } from '../FolderBarFolder/FolderBarFolder';

interface FolderBarTabProps {
  tab: FolderBarTabModel;
}

export const FolderBarTab: React.FC<FolderBarTabProps> = ({ tab }) => {
  return (
    <React.Fragment>
      <div className="d-flex ps- folder-menu align-items-center w-100">
        <div className="w-100">
          <h1 className="d-flex align-items-center ms-3 p-2 m-0">
            {tab.title}
          </h1>
        </div>
      </div>
      {tab.folders?.map((folder, index) => (
        <FolderBarFolder key={index} folder={folder} />
      ))}
    </React.Fragment>
  );
};
