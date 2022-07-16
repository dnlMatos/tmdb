import styled from "styled-components";

export const Button = styled.button`
  background: white;
  color: #252525;
  border: none;
  font-weight: bold;
  cursor: pointer;  
  transition: 300ms ease-in-out;
  
  &:hover {
  background: white;
  transition: 300ms ease-in-out;
  transform: scale(1.05);
}
`;
