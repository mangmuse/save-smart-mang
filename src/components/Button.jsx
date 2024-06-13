import clsx from "clsx";

export default function Button({ type, name, onClick, children }) {
  const buttonClasses = clsx("h-10 py-2 px-4 rounded-md text-white", {
    "bg-blue-500 hover:bg-blue-700": name === "submit",
    "bg-red-500 hover:bg-red-700": name === "delete",
    "bg-gray-500 hover:bg-gray-700": name === "go-back",
  });
  return (
    <button className={buttonClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
