import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: block;
  right: 2rem;
  bottom: 4rem;
  padding: 4rem 4rem 0 4rem;
  background: #ffffff;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const Close = styled.span`
  float: right;
  opacity: 0.4;
  transform: translateY(-4px);
  :hover {
    opacity: 0.5;
  }
  ::after {
    content: "${({ active }) => (active ? '\\2013' : '\\002B')}";
  }
`;

const Title = styled.h4`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h5`
  margin-bottom: 2rem;
`;

const Content = styled.div(
  ({ active }) => css`
    transition: max-height 400ms ease, opacity 400ms ease;
    overflow: hidden;
    max-height: ${active ? '100vh' : 0};
    opacity: ${active ? 1 : 0};
  `
);

export const Course = props => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper key={`${props.dept}-${props.number}`}>
      <Close onClick={() => setActive(!active)} active={active} />
      <Title onClick={() => setActive(!active)}>
        {props.dept} {props.number}
      </Title>
      <Subtitle onClick={() => setActive(!active)}>{props.title}</Subtitle>
      <Content active={active}>{props.description}</Content>
    </Wrapper>
  );
};
