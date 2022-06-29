import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import FetchCreate from "./Components/FetchCreate";
import FetchRead from "./Components/FetchRead";
import FetchUpdate from "./Components/FetchUpdate";
import FetchDelete from "./Components/FetchDelete";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/FetchCreate" element={<FetchCreate />}>
          Fetch create
        </Route>
        <Route path="/FetchRead" element={<FetchRead />}>
          Fetch Read
        </Route>
        <Route path="/FetchUpdate" element={<FetchUpdate />}>
          Fetch update
        </Route>
        <Route path="/FetchDelete" element={<FetchDelete />}>
          Fetch delete
        </Route>
      </Route>
      <Route


        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
            <p>
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
