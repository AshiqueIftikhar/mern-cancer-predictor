import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;
const Start = ({props}) => {
  const startQuestion = () => props(true)
 
  return (
      <Intro>
        <img src="https://cdn-icons-png.flaticon.com/512/3140/3140305.png" alt="" width="200px"/>
          <h1>Cancer Predictor</h1>
          <h4>We will ask you some questions to determine if you have any risk of cancer</h4>
          <Button onClick={startQuestion} css={btnCSS}>Begin</Button>
      </Intro>
  )
}

export default Start