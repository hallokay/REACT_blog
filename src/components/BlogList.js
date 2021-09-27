import React from 'react'
import {Link} from 'react-router-dom'

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog_list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog_preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="blog_title">{blog.title}</h2>
            <span>
              Written by <strong>{blog.author}</strong>
            </span>
            {/* <button onClick={() => handleDel(blog.id)}>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList
