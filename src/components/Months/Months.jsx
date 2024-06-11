import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MONTHS } from "../../constants/dateConstants";
import { MonthTab, Wrapper } from "./Months.styled";

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
    <Wrapper>
      {MONTHS.map((month, index) => (
        <MonthTab
          key={index}
          $isActive={activeMonth === index}
          onClick={() => handleMonthClick(index)}
        >
          {month}
        </MonthTab>
      ))}
    </Wrapper>
  );
}
