import React, {Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './pages/nav';
import { Outlet } from 'react-router-dom/dist';
import Home from './pages/home';
import DetailPage from './pages/detailPage';
import GenrePage from './pages/genrePage1';
import GlobalStyle from './globalstyle';
import Main from './pages/mainOriginal/total';
import { DataProvider } from './context/dataContext';
import { StoreProvider } from 'easy-peasy';
import Login from './pages/login/loginTotal/login';
import store from './store/store';
import Register from './pages/register/register';
import { Auth0Provider } from '@auth0/auth0-react';
import TestBahare, { Ali } from './testBahare';
import TestLogin2 from './pages/testLogin2/testLogin2';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const AppLayout = () => (

  <DataProvider>
  <Auth0Provider
  domain="dev-mpxmkzkrdooi6cd6.us.auth0.com"
  clientId="uAP3r7RxmpN8StZhjMWBEwbdO5IM2QQb"
  redirectUri = {window.location.origin}
  >
  <StoreProvider store={store}>
  <GlobalStyle/>
  <Nav/>
  <Outlet/>
  </StoreProvider>
  </Auth0Provider>
  </DataProvider>
  )
  const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Main/>,
      },
      {
        path: "/genre",
        element: <Home/>,
      },
      {
        path: "genre/:id",
        element: <GenrePage/>,
      },
      {
        path: "genre/:id/:title",
        element: <DetailPage/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/test-login",
        element: <TestLogin2/>,
      },
      // {
      //   path: "genre/:genreId",
      //   element: <GenrePage/>,
      // },
      // {
      //   path: "movie/:movieId",
      //   element: <DetailPage/>,
      // },
      {
        path: "contact",
        element: <p>hi</p>,
      },
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();