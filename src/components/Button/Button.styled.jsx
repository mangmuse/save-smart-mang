import styled from "styled-components";

const buttonStyles = {
  submit: {
    default: "var(--color-blue)",
    hover: "#0056b3",
  },
  delete: {
    default: "var(--color-red)",
    hover: "#cc0000",
  },
  "go-back": {
    default: "var(--color-gray)",
    hover: "#5a6268",
  },
};

export const Button = styled.button`
  background-color: ${(props) => buttonStyles[props.$btnType]?.default};
  color: var(--color-white);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => buttonStyles[props.$btnType]?.hover};
  }
`;
