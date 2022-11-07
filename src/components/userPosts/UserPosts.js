import { useState, useContext, useEffect } from "react";
import { BlogContext } from "../../BlogContext";
import { useParams } from "react-router-dom";

const UsersPosts = () => {
  const { userId } = useParams();
  let { user, SetUsers, users, SetUser } = useContext(BlogContext);
  const [userPosts, SetUserPosts] = useState([]);
  useEffect(() => {

    user.id && fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => SetUser(data[userId-1]));
    
    console.log(user);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((data) => SetUserPosts(data));
  }, []);

  return (
    <>
      {console.log(userPosts)}
      <h1>{userId} Posts</h1>

      {/* <h3>{userPosts[0].title}</h3> */}
    </>
  );
};

export default UsersPosts;
