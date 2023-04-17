import { MainLayout } from "./components/MainLayout";
import { Dessert } from "./components/Dessert";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="dessert" element={<Dessert />} />
        {/* <Route path="page2" element={<Page2 />} /> */}
      </Routes>
      {/* <MainLayout /> */}
    </BrowserRouter>
  );
}

export default App;
