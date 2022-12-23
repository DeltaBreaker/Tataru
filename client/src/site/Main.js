import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header.js";
import Carousel from "./component/carousel/Carousel.js";
import Footer from "./component/Footer.js";
import MemberList from "./component/member/MemberList.js";
import MemoryList from "./component/memory/MemoryList.js";
import Memory from "./component/memory/Memory.js";

export default function Main() {
  return (
    <div class="page-container">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/memory" element={<MemoryList />} />
          <Route path="/memory/:id" element={<Memory />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
