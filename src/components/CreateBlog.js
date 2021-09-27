import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("none");
 const [isLoading, setIsLoading] = useState(false);
const history = useHistory();

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    // console.log(e.target.name);
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else {
        setAuthor(value);
    }
    // 10월 14 2시 20분 -- 250 2000  원 무과 예약
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author};
    
    setIsLoading(true);
    // console.log(blog);

    // 서밋하면 서버에 포스팅하는 것
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)

    }).then(()=>{
        console.log('added');
    setIsLoading(false);
    history.push('/');

    })


  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form className="blog_form" onSubmit={onSubmit}>
        <label>Blog tltle:</label>
        <input
          type="text"
          required
          name="title"
          value={title}
          onChange={onChange}
        />
        <label>Blog author:</label>
        <select value={author} onChange={onChange}>
          <option value="none">익명</option>
          <option value="kay">kay</option>
        </select>

        <label>Blog content:</label>
        <textarea
          value={content}
          name="content"
          onChange={onChange}
          required
        ></textarea>
        {!isLoading ? <button>Add Blog</button> : <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
