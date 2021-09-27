import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    err,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
const history = useHistory();

  console.log(id);


const onClickDel = () => {


  fetch(`http://localhost:8000/blogs/${id}`, {
    method: 'DELETE'

  }).then(() => {
    history.push("/");

  })
}


  return (
    <div className="blog_detail">
      {isLoading && <div>Loading...</div>}
      {err && <div> {err}</div>}
      {blog && (
        <article>
          <h2 className="blog_title">{blog.title}</h2>
          <span>
            written by <strong>{blog.author}</strong>
          </span>
          <p className="blog_desc">{blog.content}</p>
          <button onClick={onClickDel}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
