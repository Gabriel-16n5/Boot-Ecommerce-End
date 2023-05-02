import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  div {
    margin-right: 20px;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: red;
`;

export const SectionLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SectionLink = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;