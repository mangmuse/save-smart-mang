import React from "react";
import {
  Amount,
  ExpenseDate,
  ExpenseDetail,
  ExpenseItem,
  StyledLink,
} from "./ExpenseCard.styled";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas";

export default function ExpenseCard({ data }) {
  const { date, item, amount, description, id } = data;

  return (
    <StyledLink to={`/expenses/edit/${id}`}>
      <ExpenseDetail>
        <ExpenseDate>{date} </ExpenseDate>
        <ExpenseItem> {`${description} - ${item}`}</ExpenseItem>
      </ExpenseDetail>
      <Amount>{formatNumberWithCommas(amount)} 원</Amount>
    </StyledLink>
  );
}
