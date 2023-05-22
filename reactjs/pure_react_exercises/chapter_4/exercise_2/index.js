import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import FileItem from './fileItem';
import "./index.css";


const fileDataList = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];

const FileList = ({fileDataList}) => {
  return(
    <div className="files">
      {fileDataList.map(fileData => (
        <FileItem key={fileData.id} fileData={fileData}/>
        ))}
    </div>
  );
};

FileList.propTypes = {
  fileDataList: PropTypes.arrayOf(PropTypes.object).isRequired
};


ReactDOM.render(
  <FileList fileDataList={fileDataList}/>,
  document.getElementById("root")
);