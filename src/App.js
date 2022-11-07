import "./App.css";
import { BlogProvider } from "./BlogContext";
import UsersTable from "./components/usersTable/UsersTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPosts from "./components/userPosts/UserPosts";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<UsersTable />} />
            <Route path="/user-posts" element={<UsersPosts/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
