import styled from "styled-components";

export const FooterPrincipal = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  .Bola {
    max-width: 168px;
  }

  .Link:hover {
    opacity: 0.5;
    color: #7d26cd;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
    .Bola {
      max-width: 105px;
    }
  }
`;
