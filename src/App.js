import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Origin from "./components/pages/Origin";
import RevivalPhase from "./components/pages/RevivalPhase";
import Introduction from "./components/pages/Introduction";
import Epilogue from "./components/pages/Epilogue";
import HoroPathyIndia from "./components/pages/HoroPathyIndia";
import HoropathyOutside from "./components/pages/HoropathyOutside";
import Publisher from "./components/pages/Publisher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="origin" element={<Origin />} />
          <Route path="revival" element={<RevivalPhase />} />
          <Route path="epilogue" element={<Epilogue />} />
          <Route path="horopathyInIndia" element={<HoroPathyIndia />} />
          <Route path="horopathyOutside" element={<HoropathyOutside />} />
          <Route path="publisher" element={<Publisher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
