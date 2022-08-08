import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 8px;
  display: flex;
  align-items: center;
  background: white;
  color: #252525;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 300ms ease-in-out;
  border-radius: 5px;

  &:hover {
    color: #252525;
    transition: 300ms ease-in-out;
    transform: scale(1.05);
    background: white;
  }

  background: ${(props) => (props.marked ? "#D18000" : "#fff")};
  color: ${(props) => (props.marked ? "#fff" : "#323232")};

  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
`;
