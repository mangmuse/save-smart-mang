import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MONTHS } from "../../constants/dateConstants";
import clsx from "clsx";

export default function Months() {
  const initialMonth = parseInt(localStorage.getItem("activeMonth"), 10) || 0;
  const [activeMonth, setActiveMonth] = useState(initialMonth);

  const navigate = useNavigate();
  const handleMonthClick = (index) => {
    setActiveMonth(index);
    navigate(`/expenses/${index + 1}`);
  };
  useEffect(() => {
    localStorage.setItem("activeMonth", activeMonth);
    navigate(`/expenses/${activeMonth + 1}`);
  }, [activeMonth, navigate]);

  return (
    <section className="flex justify-center flex-wrap rounded-2xl p-5 mb-5 bg-white gap-3">
      {MONTHS.map((month, index) => (
        <div
          className={clsx(
            "flex justify-center items-center w-26 h-16 rounded-lg text-lg font-semibold text-black bg-custom-btnBg hover:bg-custom-brand hover:text-white cursor-pointer",
            {
              "text-white bg-teal-400": activeMonth === index,
            }
          )}
          key={index}
          onClick={() => handleMonthClick(index)}
        >
          {month}
        </div>
      ))}
    </section>
  );
}
