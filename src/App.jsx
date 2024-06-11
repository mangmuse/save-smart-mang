import { Outlet } from "react-router-dom";
import useExpensesStore from "./store/expensesStore";
// import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const expenses = useExpensesStore((state) => state.expenses);
  return (
    <>
      {/* <GlobalStyle /> */}
      <Outlet />
    </>
  );
}
