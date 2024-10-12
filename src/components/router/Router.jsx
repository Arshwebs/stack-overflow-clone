import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Company from "../features/company/Company";
import Ask_Questions from "../features/ask_question/Ask_Questions";
import Saves from "../features/saves/Saves";
import Tags from "../features/tags/Tags";
import Users from "../features/users/Users";
import Profile from "../features/users/Profile";
import ErrorPage from "../ui/ErrorPage";
import Home from "../features/home/Home";
import AllQuestions from "../features/questions/AllQuestions";
import AllUsers from "../features/users/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/questions", element: <AllQuestions /> },
      { path: "/company", element: <Company /> },
      { path: "/ask", element: <Ask_Questions /> },
      { path: "/saves", element: <Saves /> },
      { path: "/tags", element: <Tags /> },
      {
        path: "/users",
        element: <Users />,
        children: [
          { element: <Navigate to="/users/all-users" replace />, index: true },
          { path: "/users/all-users", element: <AllUsers /> },
          { path: "/users/:id/:name", element: <Profile /> },
        ],
      },
    ],
  },
]);
export default router;
