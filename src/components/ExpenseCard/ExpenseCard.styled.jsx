import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 60px;
  padding: 15px 20px;
  border-radius: 8px;
  margin: 10px 0;
  text-decoration: none;
  text-overflow: ellipsis;
  color: black;
  background-color: var(--color-expense-list-bg);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;
export const ExpenseDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 17px;
  width: 90%;
`;

export const ExpenseDate = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  opacity: 0.8;
`;
export const ExpenseItem = styled.span`
  color: var(--color-blue);
  font-weight: bold;
`;

export const Amount = styled.span`
  color: var(--color-blue);
  font-weight: bold;
  overflow: visible;
`;
