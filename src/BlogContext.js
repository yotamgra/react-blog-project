import { useState, useEffect, createContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

  const [users, SetUsers] = useState([]);
  const [user, SetUser] = useState({})

  useEffect(() => {
    console.log("hello");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => SetUsers(data));
  }, []);

  const value = {users, user, SetUser}
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
