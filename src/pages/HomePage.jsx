import { Outlet } from "react-router-dom";
import AddForm from "../components/Homepage/AddForm";
import Months from "../components/Homepage/Months";

export default function HomePage() {
  return (
    <div className="flex flex-col p-8 w-full max-w-200 rounded-2xl">
      <AddForm />
      <Months />
      <Outlet />
    </div>
  );
}
