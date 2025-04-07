import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/root/Root';
import ErrorPage from './componets/ErrorPage/ErrorPage';
import Home from './componets/Home/Home';
import Dashbord from './componets/Dashbord/Dashbord';
import Book_details from './componets/Book_details/Book_details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
         path : "books/:bookId",
         element : <Book_details></Book_details>,
         loader : () => fetch('/booksData.json')
         
      },
      {
        path: "dashbord",
        element: <Dashbord></Dashbord>
        
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
