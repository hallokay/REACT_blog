import React from "react";
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
 const { data: blogs, isLoading, err } = useFetch("http://localhost:8000/blogs");
//  여기서 useFetch로 url 을 보내서 useFetch쪽에서 리턴하는 값들을 받아옴
// data의 이름을 blogs로 지정해줌

  // const handleDel = (id) => {
  //   console.log(id);
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  // };

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {err && <div> { err }</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs!" />
      )}
      {/* 그냥 이렇게만 넣어 줬을 때 에러가 발생한다. 블로그리스트로 넘어가는 것은 빈 값이기 때문 
      그래서 자바스크립트 식 {blog && }를 써주면 됨.. &&연산자의 왼쪽이 true 이면 오른쪽이 실행됨 */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'kay')} title="Kay's Blogs!" /> */}
    </div>
  );
};

export default Home;
