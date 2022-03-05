import React from "react";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";

export const Home = () => {
  return (
    <div className="row">
      <div className="container"
        style={{ background: 'blue', height: '100vh' }}
      >
        <div className="row">
          <Navbar />
          <Main />
          <Search />
        </div>
      </div>
      {/* <main className="col-6" style={{ background: "blue", height: "100vh" }}></main> */}
      {/* <aside className="col-3" style={{ background: "yellow", height: "100vh" }}></aside> */}
    </div>
  );
};

