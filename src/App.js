import React from "react";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Wrapper from "./components/wrapper";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper></Wrapper>
    </div>
  );
}

export default App;
