import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.$isUncontrolled &&
    css`
      margin-bottom: 10px;
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  padding: 8px;
`;
