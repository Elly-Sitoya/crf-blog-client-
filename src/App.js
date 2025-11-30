import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Blog from "./blog/Blog";

/**
 * Main App Component
 *
 * This is the main application entry point that handles routing:
 * - Landing page at "/"
 * - Blog component at "/blogs/*" and other blog routes
 * The Blog component is self-contained and includes:
 * - Context provider for authentication state
 * - Router for blog routes
 * - All blog functionality (posts, profiles, search, etc.)
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/*" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
