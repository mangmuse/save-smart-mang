import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;

  background-color: var(--color-white);
  gap: 16px;
`;

const activeStyles = css`
  background-color: var(--color-brand);
  color: var(--color-white);
`;

export const MonthTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 60px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  background-color: var(--color-btn-bg);
  color: var(--color-black);
  cursor: pointer;
  &:hover {
    ${activeStyles}
  }
  ${(props) => props.$isActive && activeStyles}
`;
