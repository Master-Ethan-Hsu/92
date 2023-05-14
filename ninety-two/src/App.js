import { MainLayout } from "./components/MainLayout";
import { Dessert } from "./components/Dessert";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UIProvider } from "./hook/useContext";
import { Bread } from "./components/Bread";
import { Coffee } from "./components/Coffee";

function App() {
  return (
    <BrowserRouter basename="/">
      <UIProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="bread" element={<Bread />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="about" element={<Bread />} />
          <Route path="qa" element={<Bread />} />
          {/* <Route path="page2" element={<Page2 />} /> */}
        </Routes>
      </UIProvider>
    </BrowserRouter>
  );
}

export default App;
