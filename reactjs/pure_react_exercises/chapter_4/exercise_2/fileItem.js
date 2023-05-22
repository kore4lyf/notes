import PropTypes from "prop-types";
import FileIconName from "./fileIconName";
import CommitMessage from "./commitMessage";
import Time from "./Time";



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

  
  export default FileItem;