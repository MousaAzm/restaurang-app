import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MenuView,
  HomeView,
  AboutUsView,
  FoodDetailView,
  OrderView,
  OrderSuccessfulView
} from "../views";
import RoutingPath from "./RoutingPath";
import OrderProvider  from "../contexts/OrderProvider";

const Routing = ({ children }) => {
  return (
    <BrowserRouter>
      <OrderProvider>
        {children}
        <Routes>
          <Route path={RoutingPath.homeView} element={<HomeView />} />
          <Route path={RoutingPath.menuView} element={<MenuView />} />
          <Route path={RoutingPath.aboutUsView} element={<AboutUsView />} />
          <Route path={RoutingPath.orderView} element={<OrderView />} />
          <Route path="/foods/:foodId" element={<FoodDetailView />}></Route>
          <Route path={RoutingPath.orderSuccessfulView} element={<OrderSuccessfulView />} />
        </Routes>
      </OrderProvider>
    </BrowserRouter>
  );
};

export default Routing;
