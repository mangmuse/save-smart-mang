import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const ListWrapper = styled.section`
  background-color: var(--color-white);

  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

export const NoExpensesMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #888888;
  background-color: rgb(249, 249, 249);
  padding: 20px;
  border-radius: 8px;
`;
