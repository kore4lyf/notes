import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import moment from "moment"
import "./index.css";
import davidMillsPhoto from "./images/davidMills.jpg";
import queenSashaPhoto from "./images/queenSasha.jpg";
import teniolaAjayiPhoto from "./images/teniolaAjayi.jpg";
import queenSashaShared from "./images/queenSashaSharedPhoto.jpg";



/*
COMPONENTS 
TweetList
  Tweet, 
  ProfilePic,
  Name,
  IsVerified,
  Handle,
  Time,
  Message,
  SharedPhotos,
  totalComments,
  TotalRetweet,
  TotalLikes,
  Share,
  Menu
*/
  




const tweetDataList = [
  {
    id: 1,
    totalComments: 24,
    time: "2023-05-21 18:12:00",
    handle: "davmills",
    totalLikes: 193,
    message: "Hello everyone I am new to twitter #NewOnTwitter #Newbie",
    name: "David Mills",
    profilePhoto: davidMillsPhoto,
    totalRetweets: 10,
    sharedPhotos: [],
    isVerified: false,
  },
  {
    id: 2,
    totalComments: 517,
    time: "2023-05-12 10:02:00",
    handle: "queenbee",
    totalLikes: 704,
    message: "Who know the title of this anime #anime",
    name: "Queen Sasha",
    profilePhoto: queenSashaPhoto,
    totalRetweets: 279,
    sharedPhotos: [queenSashaShared],
    isVerified: true,
  },
  {
    id: 3,
    totalComments: 125,
    time: "2023-04-12 10:02:00",
    handle: "teniofafrica",
    totalLikes: 54,
    message: "act-dom.development.js:86 Warning: \
    ReactDOM.render is no longer supported in React \
    18. Use createRoot instead. Until you switch \
    to the new API, your app will behave as if it's \
    running React 17. Learn more: \
    https://reactjs.org/link/switch-to-createroot",
    name: "Teniola Ajayi",
    profilePhoto: teniolaAjayiPhoto,
    totalRetweets: 43,
    sharedPhotos: [],
    isVerified: false,
  }
];

const Menu = () => {
  return(
    <svg className="menu icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.11 3.21">
      <circle className="dot" cx="1.61" cy="1.61" r="1.61"/>
      <circle className="dot" cx="7.55" cy="1.61" r="1.61"/>
      <circle className="dot" cx="13.5" cy="1.61" r="1.61"/>
    </svg>
  );
};


const Share = () => {
  return(
    <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.38 55.27">
      <path className="share-stroke" d="M2.5,37.34v9.9c0,3.05,2.48,5.53,5.53,5.53H62.35c3.05,0,5.53-2.48,5.53-5.53v-9.9"/>
      <path className="share-stroke" d="M36.14,39.4V2.5"/>
      <path className="share-stroke" d="M24.23,14.93L36.14,2.5l11.69,12.64"/>
    </svg>
  );
};

const TotalLikes = ({total}) => {
  return(
    <span className="icon-total">
      <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.5 71.16">
        <path d="M73.5,26.14c-.23,8.08-4.55,16.05-10.46,23.32-6.16,7.58-13.43,13.97-21.32,19.71-3.27,2.38-6.04,2.83-9.52,.21C19.73,59.99,7.93,50.07,2.08,34.94-1.3,26.18-.58,17.76,4.39,9.7,11.27-1.5,24.01-3.33,33.32,5.92c2.71,2.69,4.24,2.75,6.91,.06,9.11-9.17,21.79-7.59,28.7,3.36,3.29,5.21,4.66,9.76,4.57,16.8Zm-5.4-1.8c-.01-4.75-1.48-9.07-4.24-12.87-5.41-7.46-13.75-8.01-20.19-1.44-1.65,1.69-3.36,3.32-4.94,5.08-1.37,1.53-2.54,1.53-3.92,.03-1.78-1.92-3.61-3.81-5.51-5.61-6.62-6.24-15.12-5.1-20.04,2.62-4.43,6.95-5.01,14.27-1.83,21.79,5.69,13.47,16.4,22.5,27.76,30.91,1.5,1.11,2.62,.48,3.86-.45,8.25-6.12,15.97-12.79,22-21.22,4.04-5.65,6.97-11.71,7.05-18.84Z"/>
      </svg>
      <span className="total">
        {total}
      </span>
    </span>
  );
};

TotalLikes.propTypes = {
  total: PropTypes.number
};


const TotalRetweet = ({total}) => {
  return(
    <span className="icon-total">
      <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.52 60.76">
        <path d="M11.24,10.62c-1.92,2.12-3.8,4.27-5.76,6.35-1.24,1.31-2.79,2.41-4.44,.93-1.77-1.58-1.01-3.18,.46-4.72,3.53-3.7,7.02-7.44,10.41-11.27,1.94-2.19,3.77-2.12,5.66-.13,3.69,3.91,7.33,7.87,11,11.81,1.24,1.33,1.6,2.85,.22,4.17-1.4,1.34-2.95,.83-4.19-.41-2.17-2.17-3.93-4.77-6.43-6.56-.96,.85-.65,1.68-.65,2.42-.02,11.42-.02,22.84-.02,34.26,0,6.1,1.48,7.74,7.63,7.84,7.09,.11,14.17-.02,21.26-.04,.92,0,1.85-.06,2.75,.07,1.54,.21,2.88,.89,2.88,2.66,0,1.95-1.3,2.73-3.13,2.73-8.92-.04-17.86,.22-26.77-.24-6.53-.33-9.89-4.55-9.93-11.39-.07-11.16-.02-22.31-.02-33.47,0-1.55,0-3.1,0-4.65-.31-.12-.61-.24-.92-.36Z"/>
        <path d="M75.61,50.79c2.47-2.59,4.34-4.52,6.18-6.49,1.34-1.44,2.84-2.72,4.71-1.12,2,1.71,.67,3.28-.64,4.69-3.4,3.65-6.82,7.28-10.2,10.95-1.97,2.14-3.79,2.48-5.93,.11-3.43-3.8-7.05-7.43-10.54-11.18-1.25-1.34-2.12-2.99-.54-4.51,1.75-1.69,3.36-.64,4.73,.83,1.88,2,3.75,3.99,5.6,5.95,1.51-.73,.95-1.94,.95-2.86,.03-11.43,.02-22.86-.05-34.3-.03-5.47-1.76-7.22-7.4-7.31-7.62-.12-15.24-.07-22.86-.07-1.9,0-4,.03-4.13-2.5-.14-2.84,2.21-2.93,4.18-2.94,7.88-.04,15.78-.17,23.65,.13,8.21,.32,11.91,4.28,11.98,12.43,.11,11.17,.06,22.34,.09,33.51,0,1.25,.11,2.5,.22,4.66Z"/>
      </svg>
      <span className="total">
        {total}
      </span>
    </span>
  );
};

TotalRetweet.propTypes = {
  total: PropTypes.number
};


const TotalComment = ({total}) => {
  return(
    <span className="icon-total">
      <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.48 73.4">
          <path d="M36.07,.1c3.41,0,6.82,.06,10.24,0,13.08-.25,23,8.42,24.79,21.39,1.82,13.22-2.78,23.65-13.15,31.73-9.23,7.19-19.27,13.16-29.38,18.97-3.62,2.08-4.14,1.7-4.17-2.52-.03-4.07-.01-8.14,0-12.2,0-1.77-.46-2.89-2.54-3.23C9.65,52.23,3.07,45.98,.73,33.82c-1.99-10.37-.05-19.83,7.54-27.66C12.21,2.1,17.01,0,22.69,0c4.46,0,8.92,0,13.38,0,0,.03,0,.06,0,.09Zm.09,5.32c-4.34,0-8.67-.01-13.01,0-5.2,.02-9.59,1.99-12.61,6.18-5.84,8.1-6.68,17.04-2.98,26.18,3.33,8.25,9.7,12.11,18.71,11.23,2.61-.25,3.48,1.17,3.45,3.58-.04,3.02,.12,6.04,.07,9.07-.04,2.42,.75,3.22,2.96,1.84,8.23-5.16,16.76-9.91,24.04-16.41,7.5-6.69,10.68-15.08,8.82-25.15-1.54-8.34-7.55-17.47-19.59-16.56-3.27,.25-6.57,.04-9.85,.04Z"/>
      </svg>
      <span className="total">
        {total}
      </span>
    </span>
  );
};

TotalComment.propTypes = {
  total: PropTypes.number
}

const SharedPhotos = ({path}) => {
  if(path.length >= 1){
    return(
      <picture>
        {path.map((image, id) => <img  className="shared-photo" key={id+1} alt="Shared photo" src={image}/>)}
      </picture>
    );
  }
};

SharedPhotos.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired
}


const Message = ({message}) => {
  return(
    <p className="message">
      {message}
    </p>
  );
};

Message.propProtypes = {
  message: PropTypes.string.isRequired
};

const Time = ({time}) => {
  return(
    <span className="time">
      {moment(time).fromNow()}
    </span>
  );
};

Time.propTypes = {
  time: PropTypes.string.isRequired
};


const Handle = ({handle}) => {
  return(
    <span className="handle">
      @{handle}
    </span>
  );
};

Handle.propTypes = {
  handle: PropTypes.string.isRequired
};


const IsVerified = ({isVerified}) => {
  if(isVerified === true){
    // Return Verfication SVG
    return(
      <span className="verification">
        <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.77 117.77">
            <path d="M18.48,81.88c-.05-1.9,.29-3.93,.89-5.93,.16-.52,.16-.52-.35-.79-1.93-1.05-3.69-2.34-5.2-3.94-2.46-2.58-4.13-5.6-4.79-9.13-.63-3.35-.23-6.6,1.11-9.73,.8-1.87,1.92-3.52,3.26-5.04,1.61-1.81,3.52-3.24,5.62-4.42,.49-.27,.51-.28,.35-.8-.41-1.34-.71-2.71-.82-4.11-.39-4.9,.64-9.42,3.82-13.29,2.85-3.48,6.56-5.44,10.98-6.11,2.95-.45,5.84-.15,8.69,.65,.69,.19,.68,.19,1.01-.42,2.03-3.7,4.86-6.57,8.68-8.43,1.76-.85,3.61-1.37,5.56-1.57,4.78-.48,9,.9,12.74,3.86,2.15,1.7,3.81,3.81,5.13,6.2,.3,.55,.3,.55,.89,.38,2.09-.6,4.22-.95,6.4-.88,4.32,.14,8.18,1.49,11.45,4.38,2.89,2.55,4.65,5.76,5.42,9.51,.68,3.29,.45,6.55-.5,9.77-.17,.58-.17,.57,.38,.88,3.33,1.86,6.04,4.37,7.94,7.7,1.13,1.97,1.84,4.08,2.09,6.34,.57,5.04-.87,9.47-4.08,13.34-1.67,2.01-3.7,3.6-6,4.85-.5,.27-.51,.27-.35,.79,.74,2.39,1.01,4.84,.86,7.32-.12,2.04-.56,4.02-1.37,5.9-.88,2.06-2.09,3.92-3.7,5.5-2.52,2.47-5.53,4-9,4.65-3.21,.6-6.36,.37-9.49-.52-.65-.19-.66-.19-.98,.42-.99,1.86-2.24,3.53-3.75,4.98-2.78,2.68-6.05,4.42-9.9,4.97-3.33,.47-6.53,0-9.58-1.43-3.92-1.84-6.81-4.76-8.9-8.51-.05-.08-.09-.17-.14-.25-.13-.27-.33-.32-.62-.24-.9,.27-1.81,.48-2.74,.64-4.07,.68-7.99,.21-11.69-1.64-3.19-1.59-5.64-3.99-7.3-7.16-1.4-2.67-2.07-5.51-2.03-8.7Zm33.42-2.42c.18-.07,.29-.21,.41-.33,1.34-1.45,2.67-2.9,4-4.36,.91-.99,1.81-1.97,2.72-2.96,1.56-1.71,3.12-3.42,4.69-5.13,.93-1.02,1.87-2.03,2.8-3.05,1.48-1.62,2.96-3.26,4.45-4.88,1.03-1.13,2.08-2.25,3.12-3.38,2-2.19,4.01-4.38,6.01-6.57,.62-.68,1.23-1.36,1.84-2.05,.28-.31,.28-.36-.03-.66-.36-.35-.74-.67-1.1-1.01-1.75-1.63-3.5-3.26-5.26-4.89-.4-.37-.48-.37-.84,.01-.86,.93-1.71,1.86-2.56,2.79-1.63,1.78-3.26,3.56-4.89,5.34-.91,.99-1.81,1.97-2.72,2.96-1.62,1.76-3.23,3.53-4.85,5.29-.98,1.07-1.98,2.14-2.96,3.21-1.55,1.69-3.1,3.39-4.65,5.08-.54,.59-.5,.56-1.05,0-3.32-3.32-6.64-6.64-9.96-9.95-.11-.11-.22-.21-.33-.32-.17-.18-.33-.16-.49,.01-.09,.1-.19,.19-.28,.28-1.91,1.91-3.81,3.82-5.72,5.74-.66,.66-.67,.58-.01,1.24,5.7,5.7,11.4,11.4,17.11,17.11,.12,.12,.24,.25,.37,.36,.05,.05,.13,.07,.19,.11Z"/>
        </svg>
      </span>
    );
  };
};

IsVerified.propTypes = {
  isVerified: PropTypes.bool.isRequired
};


const Name = ({name}) => {
  return(
    <span className="name">
      {name}
    </span>
  );
};

const ProfilePic = ({path}) => {
  return (
    <picture className="profile-pic">
      <img alt="Profile picture" src={path}/>
    </picture>
  );
};

ProfilePic.propTypes = {
  path: PropTypes.string.isRequired
};


const Tweet = ({tweetData}) => {
  return (
    <div className="tweet">
      <div className="col-1">
        <ProfilePic path={tweetData.profilePhoto}/>
      </div>

      <div className="col-2">
        <div className="top">
          <div className="post-details">
            <Name name={tweetData.name}/>
            <IsVerified isVerified={tweetData.isVerified}/>
            <Handle handle={tweetData.handle}/>

            <span className="seperator">
            <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.21 3.21">
                <circle cx="1.61" cy="1.61" r="1.61"/>
            </svg>
            </span>
            <Time time={tweetData.time}/>
          </div>
            <Menu/>
        </div>
        <Message message={tweetData.message}/>
        <SharedPhotos path={tweetData.sharedPhotos}/>
        <div className="icons">
          <TotalComment total={tweetData.totalComments}/>
          <TotalRetweet total={tweetData.totalRetweets}/>
          <TotalLikes total={tweetData.totalLikes}/>
          <Share/>
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweetData: PropTypes.object.isRequired
};


const TweetList = ({tweetDataList}) => {
  return (
    <div className="tweet-list">
      {tweetDataList.map( tweetData => (
          <Tweet tweetData={tweetData}  key={tweetData.id}/>
        )
      )}
    </div>
  )
};

TweetList.propTypes = {
  tweetDataList: PropTypes.arrayOf(PropTypes.object)
};


ReactDOM.render(
  <TweetList tweetDataList={tweetDataList}/>,
  document.getElementById("root")
);