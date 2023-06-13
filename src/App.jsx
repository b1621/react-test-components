import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PopupForm from "./components/PopupForm";
import "./app.css";
import ReactQuery from "./components/query/ReactQuery";
import Post from "./components/query/Post";
import Edit from "./components/query/Edit";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/formPopup' element={<PopupForm />} />
        <Route path='/reactquery' element={<ReactQuery />} />
        <Route path='/reactquery/post/:id' element={<Post />} />
        <Route path='/reactquery/post/:id/edit' element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
