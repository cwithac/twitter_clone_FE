import React from "react";
import {Link} from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>New to Warbler?</h1>
        <h4>Share your thoughts in 120 characters or less.</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign Up Here!
        </Link>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/>
    </div>
  );
};

export default Homepage;
