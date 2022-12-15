import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "./utils/urls";
// import { loaderShop } from "./utils/loaderShop";
import { Layout } from "./components/layout";

import { ErrorPage } from "./components/pages/error-page";
import { NotFoundPage } from "./components/pages/not-found-page";
import { Shop } from "./components/pages/shop";
import AuthReg from '../src/components/AuthReg/AuthReg'

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <>Home</>,
      },
      {
        path: PATHS.shop,
        element: <Shop />,
        // loader: loaderShop,
      },
      {
        path: PATHS.blog,
        element: <>Blog</>,
        // loader: loaderBlog,
      },
      {
        path: PATHS.about,
        element: <>About</>,
        // loader: loaderAbout,
      },
      {
        path: PATHS.cart,
        element: <>Cart</>,
        // loader: loaderAbout,
      },
      {
        path: PATHS.profile,
        element: <>Profile</>,
        // loader: loaderAbout,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path:PATHS.login,
        element:<AuthReg initial='log'/>
      },
      {
        path:PATHS.register,
        element:<AuthReg initial='reg' />
      }
    ],
  },
]);




export const routerq = createBrowserRouter([
  {
    path: PATHS.profile,
    element: <AuthReg type='log'/>,
    errorElement: <ErrorPage />,
    
  },
]);
