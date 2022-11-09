import { useState, useContext, useEffect } from "react";

const Post = ({ post }) => {
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const fetchPostComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      );
      const postComments = await res.json();
      console.log("postComments", postComments);
      setPostComments(postComments);
    };
    fetchPostComments();
  }, []);

  return (
    
    <div className="post-container">
      <h4 className="post-header">{post.title}</h4>
      <p className="post-body">{post.body}</p>
      {console.log("postComments",postComments)}
    </div>
    
  );
};

export default Post;
