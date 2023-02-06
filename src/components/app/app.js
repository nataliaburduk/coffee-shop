import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../main-page/main-page";
import OurCoffeePage from "../our-coffee-page/our-coffee-page";
import PleasurePage from "../pleasure-page/pleasure-page";
import ProductPage from "../product-page/product-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/our-coffee" element={<OurCoffeePage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/for-your-pleasure" element={<PleasurePage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
