import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PostsList from "../pages/Home/PostsList.tsx";
import PostDetails from "../pages/PostDetail/PostDetails.tsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
