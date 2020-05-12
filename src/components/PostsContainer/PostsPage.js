//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data

const PostsPage = (props) => {
  // set up state for your data
  console.log(props)
  const {postData} = props;
  console.log(postData)
  return (
    <div className="posts-container-wrapper">
      {postData.map((postObj, index) => {
        return <Post key = {index} post = {postObj} />
        })
      } */}
    </div>
  );
};

export default PostsPage;
