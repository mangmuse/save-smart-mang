import { Outlet } from "react-router-dom";
import AddForm from "../../components/AddForm/AddForm";
import Months from "../../components/Months/Months";

export default function ExpenseManager() {
  return (
    <div>
      <AddForm />
      <Months />
      <Outlet />
    </div>
  );
}
