import React from 'react';
import styled from 'styled-components';

const BackToTop = () => {
  return (
    <StyledBackToTop>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        BACK TO TOP
      </button>
    </StyledBackToTop>
  );
};

const StyledBackToTop = styled.div`
  margin: 24px 0;
  text-align: center;

  button {
    display: inline-block;
    width: 318px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.backToTop.border_backToTop_button};
    color: ${({ theme }) => theme.backToTop.text_backToTop_button};
    background: inherit;
  }
`;

export default BackToTop;
