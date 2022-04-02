import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddPage from "./components/Pages/AddPage";
import Page from "./components/Pages/Page";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <TopBar />
        <div className="page-main">
          <Routes>
            <Route path="/" element={<AddPage />} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
