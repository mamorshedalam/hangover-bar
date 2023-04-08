import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import ErrorPage from "../pages/errorPage";
import Index from "../pages";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [{
               errorElement: <ErrorPage />,
               children: [
                    { index: true, element: <Index /> }
               ]
          }]
     }
]);

export default routes;