import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
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


const FileIconName = ({name, type}) => {
  const fileIcon = (
    <svg className="file-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path className="fa-primary" d="M256 0v128h128L256 0zM154.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C129.8 386.1 134.9 388 140 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L120.3 320l33.86-33.84C161.1 278.3 161.1 265.7 154.1 257.8zM258.1 257.8c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31L263.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C233.8 386.1 238.9 388 244 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31L258.1 257.8z"/>
      <path className="fa-secondary" d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 334.2l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0l48 48C313.1 313.7 313.1 326.3 306.1 334.2z"/>
    </svg>);
  const folderIcon = (
    <svg fill="currentColor" className="folder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path className="fa-primary" d="M512 192v240c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432V192H512z"/>
      <path className="fa-secondary" d="M512 144V192H0V80C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/>
    </svg>);


  return(
    <span className="icon-name">
      <span>{type === "file" ? fileIcon : folderIcon }</span>
      <span>{name}</span>
    </span>
  );
};


const CommitMessage = ({message}) => {
  return(
    <span className="commit">
      {message}
    </span>
  );
};

CommitMessage.propTypes = {
  message: PropTypes.string
};


const Time = ({time}) => {
  return (
    <span className="time">
      {moment(time).fromNow()}
    </span>
  );
};

Time.propTypes = {
  time: PropTypes.string.isRequired
};


const FileItem = ({fileData}) => {
  return (
    <div className="file-item">
      <FileIconName name={fileData.name} type={fileData.type}/>
      <CommitMessage message={fileData.latestCommit.message}/>
      <Time time={fileData.updated_at}/>
    </div>
  )
}

FileItem.propTypes = {
  fileData: PropTypes.object.isRequired
};


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