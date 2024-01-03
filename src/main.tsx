import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './assets/App/App.tsx'
import Todo from "./assets/Todo/Todo.tsx"
import Form from "./assets/Form/Form.tsx"
import Pagination from "./assets/Pagination/Pagination.tsx"
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/todo/",
        element: <Todo />,
    },
    {
        path: "/form/",
        element: <Form />,
    },
    {
        path: "/pagination/",
        element: <Pagination />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
