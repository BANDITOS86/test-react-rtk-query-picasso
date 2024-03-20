import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PostsList from "../pages/Home/PostsList.tsx";
import PostPage from "../pages/PostPage/PostPage.tsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
