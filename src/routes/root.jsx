import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ErrorPage from "../pages/errorPage";
import Index from "../pages";
import Shop from "../pages/shop";
import About from "../pages/about";
import Contact from "../pages/contact";
import ProductDetail from "../pages/productDetail";
import Booking from "../pages/booking";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [{
               errorElement: <ErrorPage />,
               children: [
                    { index: true, element: <Index /> },
                    {
                         path: '/shop',
                         element: <Shop />
                    },
                    {
                         path: '/about',
                         element: <About />
                    },
                    {
                         path: '/contact',
                         element: <Contact />
                    },
                    {
                         path: '/product/:category/:id',
                         element: <ProductDetail />
                    },
                    {
                         path: '/booking',
                         element: <Booking />
                    }
               ]
          }]
     }
]);

export default routes;