import React from "react";
import {Link} from "react-router-dom";

const Homepage = () => (
  <div className="home-hero">
    <h1>New to Warbler?</h1>
    <h4>Share your thoughts in 120 characters or less.</h4>
    <Link to="/signup" className="btn btn-primary">
      Sign Up Here!
    </Link>
  </div>
)

export default Homepage;
