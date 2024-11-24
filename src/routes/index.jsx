import { lazy } from "react";

const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const OrderHistory = lazy(() => import("../pages/OrderHistory"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const ProductDisplay = lazy(() => import("../pages/ProductDisplay"));

const routes = [
  {
    path: "/",
    name: "Home page",
    element: <HomePage />,
  },
  {
    path: "/cart",
    name: "Cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    name: "Checkout",
    element: <Checkout />,
  },
  {
    path: "/order-history",
    name: "Order History",
    element: <OrderHistory />,
  },
  {
    path: "/product",
    name: "Product Display",
    element: <ProductDisplay />,
  },
  {
    path: "/product/:id",
    name: "Product Detail",
    element: <ProductDetail />,
  },
];

export default routes;