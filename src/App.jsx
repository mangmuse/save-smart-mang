import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="flex  w-screen flex-col items-center">
      <Header />
      <Outlet />
    </main>
  );
}
