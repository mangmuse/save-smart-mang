import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EditExpense from "../pages/EditExpense/EditExpense";
import ExpenseManager from "../pages/ExpenseManager/ExpenseManager";
import Expenses from "../pages/Expenses/Expenses";
import ErrorPage from "../pages/ErrorPage";

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
        element: <ExpenseManager />,
        children: [{ path: ":month", element: <Expenses /> }],
      },
      {
        path: "expenses/edit/:productId",
        element: <EditExpense />,
      },
    ],
  },
]);

export default router;
