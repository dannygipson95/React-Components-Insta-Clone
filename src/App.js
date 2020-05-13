/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
import dummyData from './dummy-data';

const App = () => {
  const [postData, setPosts] = useState(dummyData)
  return (
    <div className="App">
      <SearchBar/>
      <PostsPage postData={postData} isSoda = {'No'} isActive = {true}/>
    </div>
  );
};

export default App;
