import "./App.css";

import Router from "../../Router";
import Navbar from "../Container/Navbar";
import Footer from "../Container/Footer";
import Header from "../Container/Header";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <div style={{ background: "#3b5d50" }}>
        <Header />
      </div>
      <div className="">
        <Router />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
