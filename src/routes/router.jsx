import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EditExpensePage from "../pages/EditExpensePage";
import ExpenseManager from "../pages/HomePage";
import Expenses from "../pages/Expenses";
import ErrorPage from "../pages/ErrorPage";
import AuthPage from "../pages/AuthPage";
import MyPage from "../pages/MyPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ExpenseManager />,
      },
      {
        path: "expenses",
        element: <HomePage />,
        children: [{ path: ":month", element: <Expenses /> }],
      },
      {
        path: "expenses/edit/:productId",
        element: <EditExpensePage />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
