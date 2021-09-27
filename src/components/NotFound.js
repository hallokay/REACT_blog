import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <h2>Sorry...</h2>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/"> 되돌아가기</Link>
    </div>
  );
};

export default NotFound;
