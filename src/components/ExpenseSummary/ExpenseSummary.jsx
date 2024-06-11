import { useParams } from "react-router-dom";

import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";
import { useMemo } from "react";
import { scaleOrdinal, schemeCategory10 } from "d3";

export default function ExpenseSummary({ expenses }) {
  const colorScale = scaleOrdinal(schemeCategory10);
  const { month } = useParams();
  const totalAmount = useMemo(
    () =>
      expenses.reduce((total, expense) => total + Number(expense.amount), 0),
    [expenses]
  );
  const itemAmounts = useMemo(() => {
    const amounts = expenses.reduce((acc, expense) => {
      if (!acc[expense.item]) {
        acc[expense.item] = 0;
      }
      acc[expense.item] += expense.amount;
      return acc;
    }, {});
    return Object.entries(amounts)
      .sort((a, b) => b[1] - a[1])
      .map(([item, amount]) => ({
        item,
        amount,
        percentage: (amount / totalAmount) * 100,
        color: colorScale(item),
      }));
  }, [expenses, totalAmount]);

  return (
    <section className="flex gap-5 p-5 flex-col rounded-2xl mb-5 items-center bg-white">
      <h3 className="text-lg font-bold">
        {month}월 총 지출: {formatNumberWithCommas(totalAmount)} 원
      </h3>
      {
        <div className="flex w-full h-10 bg-gray-200 rounded-lg overflow-hidden">
          {itemAmounts.map((item, index) => (
            <div
              className="flex h-full "
              key={index}
              style={{
                backgroundColor: item.color,
                width: `${item.percentage}%`,
              }}
            />
          ))}
        </div>
      }
      <div className="flex justify-center items-center flex-wrap w-4/5 gap-5">
        {itemAmounts.length > 0 &&
          itemAmounts.map((item, index) => (
            <li className="flex text-sm items-center fontsemi" key={index}>
              <div
                className="w-5 h-2.5 flex mr-1"
                style={{ backgroundColor: item.color }}
              />
              <p>
                {item.item}: {formatNumberWithCommas(item.amount)} (
                {item.percentage.toFixed(2)}%)
              </p>
            </li>
          ))}
      </div>
    </section>
  );
}
