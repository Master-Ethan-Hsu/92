import { MainLayout } from "./components/MainLayout";
import { Dessert } from "./components/Dessert";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductContext } from "./reactContext/useProduct";

function App() {
  return (
    <BrowserRouter basename="/">
      <ProductContext.Consumer>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="dessert" element={<Dessert />} />
          {/* <Route path="page2" element={<Page2 />} /> */}
        </Routes>
      </ProductContext.Consumer>
    </BrowserRouter>
  );
}

export default App;
