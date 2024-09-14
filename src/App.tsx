import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./routes/Home";

const App = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default App;
