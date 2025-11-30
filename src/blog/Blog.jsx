import React from "react";
import Context from "./contextProvider/Context";
import BlogApp from "./BlogApp";

/**
 * Blog Component with Context Wrapper
 *
 * This component wraps BlogApp with the Context provider,
 * keeping all blog logic contained within the blog directory.
 */
function Blog() {
  return (
    <Context>
      <BlogApp />
    </Context>
  );
}

export default Blog;
