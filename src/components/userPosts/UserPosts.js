import { useState, useContext, useEffect } from "react";
import { BlogContext } from "../../BlogContext";


const UsersPosts = () => {
    const { user} = useContext(BlogContext);
    const [userPosts, SetUserPosts] = useState([])
    useEffect(()=>{
        console.log(user);
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(res=>res.json()).then(data=>SetUserPosts(data))
    },[])

  return <>
  {  console.log(userPosts)}
  <h1>{user.id} Posts</h1>

  {/* <h3>{userPosts[0].title}</h3> */}
  </>;
};

export default UsersPosts;
