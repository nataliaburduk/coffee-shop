import Component from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import App from '../app/app';
import OurCoffeeMain from '../our-coffee-main/our-coffee-main';
import PleasureMain from '../pleasure-main/pleasure-main';
import Product from '../product/product';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
          </Route>
          <Route path="/our-coffee" element={<OurCoffeeMain />}>
          </Route> 
          <Route path="/products/:id" element={<Product />}>
          </Route>
          <Route path="/for-your-pleasure" element={<PleasureMain />}>
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default AppRouter;

