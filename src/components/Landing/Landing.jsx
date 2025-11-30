import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logo from "../../blog/assets/travelbrain-logo.svg";

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-logo">
            <img src={logo} alt="Blog Logo" />
          </div>
          <h1 className="landing-title">Welcome to Our Blog</h1>
          <p className="landing-description">
            Discover amazing stories, insights, and ideas from our community of
            writers.
          </p>
          <Link to="/blogs" className="blog-page-link">
            Blog Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
