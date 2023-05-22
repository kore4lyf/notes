import moment from "moment";
import PropTypes from "prop-types";

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

  export default Time;