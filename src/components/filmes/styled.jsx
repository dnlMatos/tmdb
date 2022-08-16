import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  width: 12rem;
  transition: 300ms ease-in-out;

  &:hover {
    transition: 300ms ease-in-out;
    transform: scale(1.05);
  }
`;

export const AllCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: #00bfff;
    list-style-type: none;
    padding: 10px;
    li {
      border-radius: 10px;

      a {
        margin: 0.5rem;
        cursor: pointer;
      }
    }
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #add8e6;
    color: #5c16c5;
  }
`
