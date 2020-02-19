import React from 'react';
import cowsay from 'cowsay-browser';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CowsayProps {
  message?: string;
}

const StyledCowsay = styled.div`
  color: pink;
`;

export const Cowsay = ({ message }: CowsayProps) => {
  return (
    <StyledCowsay>
      <pre>{cowsay.say({ text: message || 'hi there!' })}</pre>
    </StyledCowsay>
  );
};

export default Cowsay;
