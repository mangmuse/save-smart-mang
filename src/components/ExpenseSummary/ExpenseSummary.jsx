import { useParams } from "react-router-dom";
import {
  ExpenseItem,
  ExpenseItemDetail,
  ExpenseItemWrapper,
  ItemColor,
  TotalExpense,
  TotalExpenseGraph,
  Wrapper,
} from "./ExpenseSummary.styled";
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
    <Wrapper>
      <TotalExpense>
        {month}월 총 지출: {formatNumberWithCommas(totalAmount)} 원
      </TotalExpense>
      {
        <TotalExpenseGraph>
          {itemAmounts.map((item, index) => (
            <ExpenseItem
              key={index}
              $bgColor={item.color}
              $width={item.percentage}
            />
          ))}
        </TotalExpenseGraph>
      }
      <ExpenseItemWrapper>
        {itemAmounts.length > 0 &&
          itemAmounts.map((item, index) => (
            <ExpenseItemDetail key={index}>
              <ItemColor $bgColor={item.color} />
              <p>
                {item.item}: {formatNumberWithCommas(item.amount)} (
                {item.percentage.toFixed(2)}%)
              </p>
            </ExpenseItemDetail>
          ))}
      </ExpenseItemWrapper>
    </Wrapper>
  );
}
