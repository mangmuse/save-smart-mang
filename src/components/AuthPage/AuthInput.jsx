import { useId } from "react";

export default function AuthInput({
  children,
  placeholder,
  value,
  onChange,
  type,
}) {
  const inputId = useId();
  return (
    <div className="w-full flex flex-col items-center">
      <label className="ml-5 text-lg self-start" htmlFor={inputId}>
        {children}
      </label>
      <input
        placeholder={placeholder}
        id={inputId}
        className="border px-2 border-gray-500 w-11/12 rounded-md h-12 outline-none"
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}
