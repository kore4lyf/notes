import PropTypes from "prop-types";

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

  export default CommitMessage;