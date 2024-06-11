import { Outlet } from "react-router-dom";
import AddForm from "../../components/AddForm/AddForm";
import Months from "../../components/Months/Months";

export default function ExpenseManager() {
  return (
    <div className="flex flex-col p-8  max-w-200 rounded-2xl">
      <AddForm />
      <Months />
      <Outlet />
    </div>
  );
}
