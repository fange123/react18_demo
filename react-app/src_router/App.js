import React from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import NeedAuth from './components/NeedAuth'
import StudentPage from "./pages/StudentPage";

const App = () => {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<NeedAuth><ProfilePage/></NeedAuth>}/>
          <Route path="/student" element={<NeedAuth><StudentPage/></NeedAuth>}/>
          <Route path="/auth-form" element={<AuthPage/>}/>
        </Routes>
      </Layout>
  );
};

export default App;
