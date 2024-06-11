import React from "react";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import { Link } from "react-router-dom";

export default function ExpenseCard({ data }) {
  const { date, item, amount, description, id } = data;

  return (
    <Link
      to={`/expenses/edit/${id}`}
      className="box-border flex justify-between items-center w-full max-w-full h-16 py-3.5 px-5 rounded-lg my-2.5 text-ellipsis text-black bg-gray-100 shadow-md  transition-all duration-200 ease-in-out hover:scale-102 "
    >
      <div className="flex flex-col justify-between leading-4 w-10/12">
        <span className="text-sm mb-1 opacity-80">{date} </span>
        <span className="text-custom-blue font-bold">
          {`${description} - ${item}`}
        </span>
      </div>
      <span className="text-custom-blue font-bold overflow-visible">
        {formatNumberWithCommas(amount)} 원
      </span>
    </Link>
  );
}
