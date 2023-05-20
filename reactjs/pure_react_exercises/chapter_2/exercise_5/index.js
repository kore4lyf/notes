import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

const emailDetails = {
  date: {
    day: 15,
    month: 7
  },
  sender: "React Newsletter",
  subject: "React Newsletter - Issue 36",
  message: "React Newsletter Issue 36 - July 15th 2016 Read on this issue on the web https://reactnewsletter.com/issues/36?sid=3QGDYBX ### Comment"
};

const RecievedMail = ({emailDetails}) => {
  return (
    <main className="recieved-mail">
      <section className="mail">
      <input type="checkbox"/>
      <button>
        <svg className="pin" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.5 207.44">
          <path d="M48.97,67.31c5.9-.53,12.48,.89,19.1,1.41,2.58,.2,4.47-.25,6.27-2.07,5.25-5.35,10.52-10.69,15.92-15.88,2.17-2.09,2.06-3.53,.1-5.81-4.83-5.63-4.05-11.65,.8-17.41,7.22-8.58,15.83-15.69,23.72-23.56,5.28-5.27,12.84-5.34,18.22-.09,7.27,7.1,14.4,14.35,21.58,21.53,15.55,15.55,31.11,31.08,46.64,46.65,6.9,6.92,6.91,16.54,.06,23.43-6.81,6.85-13.64,13.69-20.5,20.49-5.6,5.54-12.1,6.09-18.27,1.23-2.6-2.05-4.36-1.6-6.42,.51-5.02,5.11-10.07,10.19-15.21,15.18-1.85,1.8-2.36,3.67-2.1,6.25,1.22,11.93,2.01,23.86,.33,35.85-1.11,7.93-3.74,15.18-8.42,21.64-5.44,7.52-14.42,8.25-21.11,1.64-12.79-12.65-25.57-25.32-38.12-38.21-3.11-3.19-4.91-3.08-7.97,.05-13.74,14.05-27.75,27.85-41.63,41.77-2.15,2.15-4.43,4.07-7.39,4.94-5.17,1.52-10.96,0-13.2-3.4-2.51-3.82-1.48-11.4,2.31-15.2,14.45-14.53,28.84-29.12,43.52-43.41,3.69-3.59,3.53-5.69-.07-9.18-12.33-11.93-23.98-24.58-36.6-36.19-8.38-7.71-7-18.64,3.46-24.64,10.66-6.1,22.2-7.67,34.98-7.52Z"/>
        </svg>
      </button>
      <div className="details">
        <div className="sender-subject-date">
          <span className="sender"> {emailDetails.sender} </span>
          <span className="subject">{emailDetails.subject} </span>
          <span className="date">{months[emailDetails.date.month].slice(0,3)} {emailDetails.date.day}</span>
        </div>
        <p className="message">
          {emailDetails.message}
        </p>
      </div>
      </section>
    </main>
  );
};

RecievedMail.propTypes = {
  emailDetails: PropTypes.shape({
    date: PropTypes.objectOf(PropTypes.number).isRequired,
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
};

ReactDOM.render(
  <RecievedMail emailDetails={emailDetails}/>,
  document.getElementById("root")
);
