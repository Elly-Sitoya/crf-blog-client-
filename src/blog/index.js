/**
 * Blog Component Export
 * 
 * This is the main export point for integrating the blog into another React app.
 * 
 * The blog component is self-contained and includes:
 * - Context provider for authentication state
 * - All blog routes and components
 * - All blog functionality (posts, profiles, search, etc.)
 * 
 * Usage Options:
 * 
 * 1. If your app already uses React Router:
 *    ```jsx
 *    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 *    import Blog from './blog';
 *    
 *    function App() {
 *      return (
 *        <Router>
 *          <Routes>
 *            <Route path="/your-other-routes" element={<YourComponent />} />
 *            <Route path="/*" element={<Blog />} />
 *          </Routes>
 *        </Router>
 *      );
 *    }
 *    ```
 * 
 * 2. If you want the blog at a specific path (e.g., /blog/*):
 *    ```jsx
 *    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 *    import Blog from './blog';
 *    
 *    function App() {
 *      return (
 *        <Router>
 *          <Routes>
 *            <Route path="/blog/*" element={<Blog />} />
 *            <Route path="/" element={<HomePage />} />
 *          </Routes>
 *        </Router>
 *      );
 *    }
 *    ```
 * 
 * 3. Standalone (if your app doesn't use React Router):
 *    Import BlogWithRouter instead (see below)
 */

import Blog from './Blog';
export default Blog;

// Export BlogWithRouter for standalone usage (includes its own Router)
export { default as BlogWithRouter } from './BlogWithRouter';

