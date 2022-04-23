import React from "react";
import EditData from "./Components/EditData/EditData";
import GetBase from "./Components/GetBase/GetBase";
import SnapShot from "./Components/GetBaseSnapShot/SnapShot";
import PostBase from "./Components/PostBase/PostBase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoEdit from "./Components/EditData/DoEdit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetBase />} />
          <Route path="/post" element={<PostBase />} />
          <Route path="/snap" element={<SnapShot />} />
          <Route path="/edit" element={<EditData />} />
          <Route path="/edit/:id" element={<DoEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
