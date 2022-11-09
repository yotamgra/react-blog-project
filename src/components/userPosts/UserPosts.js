import { useState, useContext, useEffect } from "react";
import { BlogContext } from "../../BlogContext";
import { useParams } from "react-router-dom";
import Post from "../post/Post";

const UsersPosts = () => {
  const { userId } = useParams();
  let { user, SetUser } = useContext(BlogContext);
  const [userPosts, SetUserPosts] = useState([]);

  useEffect(() => {
    !user.id &&
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("fetch");
          SetUser(data);
        });

    // console.log(user);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((data) => SetUserPosts(data));
  }, []);

  // useEffect(()=>{
  //   const fetchPostComments = async () => {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  //     const postComments = await res.json();
  //     console.log("postComments", postComments);
  //     setPostComments(postComments);
  //     fetchPostComments()
  //   }
  // },[postId])

  // const fetchPostComments = async (postId) => {
  //    fetch(
  //     `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => data);
  // };

  console.log("user", user);

  return (
    <>
      {/* {console.log("userPosts",userPosts)} */}
      <h1 className="user-posts-header">{user.name} Posts</h1>
      <div className="posts-container">
        {userPosts.map((post) => {
          // fetchPostComments(post.id);
          // setPostId(post.id)

          return <Post post={post} key={post.id} />;
        })}
      </div>

      {/* <h3>{userPosts[0].title}</h3> */}
    </>
  );
};

export default UsersPosts;
