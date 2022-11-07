import { useContext } from "react";
import { BlogContext } from "../../BlogContext";

const UsersPosts = () => {
  const { userId} = useContext(BlogContext);
  return <><h1>{userId} Posts</h1></>;
};

export default UsersPosts;
