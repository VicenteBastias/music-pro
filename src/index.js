import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Tarjeta from './pages/Tarjeta';
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';
import ApiProfe from './pages/ApiProfe';

export default function Build() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Tarjeta" element={<Tarjeta />} />
            <Route path="*" element={<NoPage />} />
            <Route path="ApiProfe" element={<ApiProfe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<Build />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
