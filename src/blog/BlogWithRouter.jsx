import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Blog from "./Blog";

/**
 * Blog Component with Router (Standalone Version)
 * 
 * Use this if your parent app doesn't use React Router,
 * or if you want the blog to have complete control over routing.
 * 
 * Usage:
 * ```jsx
 * import { BlogWithRouter } from './blog';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <YourOtherComponents />
 *       <BlogWithRouter />
 *     </div>
 *   );
 * }
 * ```
 */
function BlogWithRouter() {
  return (
    <Router>
      <Blog />
    </Router>
  );
}

export default BlogWithRouter;

