import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  /* border-top: 1px solid #186ead;
  border-bottom: 1px solid #186ead; */
  /* background-color: rgba(0, 0, 0, 0.4); */
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 0 4px;
  width: 30px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #999;
  }
  &:focus::after {
    color: white;
    background-color: #999;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #999;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl>
          {pageNumbers.map((number) => (
            <PageLi onClick={() => paginate(number)} key={number}>
              <PageSpan>
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;