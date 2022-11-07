import { useState, useContext, useEffect } from "react";
import { BlogContext } from "../../BlogContext";


const UsersPosts = () => {
    const { userId} = useContext(BlogContext);
    const [userPosts, SetUserPosts] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(res=>res.json()).then(data=>console.log(data))
    },[])

  return <>
  {/* {console.log("userPosts",userPosts)} */}
  <h1>{userId} Posts</h1>
  </>;
};

export default UsersPosts;
