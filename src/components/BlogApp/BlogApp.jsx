import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register.jsx";
import Home from "../Homepage/Home";
import Landing from "../Landing/Landing";

import Blog from "../Blog/Blog";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import EditProfile from "../Editprofile/EditProfile";
import Tag from "../Tagwise/Tag";
import Search from "../Search/Search";
import Error from "../AdditionalPages/Error";
import Pending from "../AdditionalPages/Pending";
import Bookmark from "../Bookmark/Bookmark";
import Write from "../Write/Write";
import Share from "../AdditionalPages/Share";

function BlogApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/" element={<Landing />} />
        <Route exact path="/blogs" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/edit/:id" element={<EditProfile />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/tag/:id" element={<Tag />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Pending />} />
        <Route exact path="/bookmarks" element={<Bookmark />} />
        <Route exact path="/write" element={<Write />} />
        <Route exact path="/share" element={<Share />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default BlogApp;

