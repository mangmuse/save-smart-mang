import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
  border-radius: 16px;
  margin-bottom: 20px;

  align-items: center;
  background-color: var(--color-white);
`;
export const TotalExpense = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const TotalExpenseGraph = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: rgb(233, 236, 239);
  border-radius: 8px;
  overflow: hidden;
`;

export const ExpenseItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  gap: 20px;
`;
export const ExpenseItem = styled.div`
  display: flex;
  width: ${(props) => props.$width}%;
  height: 100%;
  background-color: ${(props) => props.$bgColor};
`;

export const ExpenseItemDetail = styled.li`
  display: flex;
  font-size: 14px;
  align-items: center;
  font-weight: 500;
`;

export const ItemColor = styled.div`
  width: 20px;
  height: 10px;
  display: flex;
  margin-right: 5px;
  background-color: ${(props) => props.$bgColor};
`;
