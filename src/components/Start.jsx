import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button';

const Intro = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {
  const startQuestion = () => props(true)
 
  return (
      <Intro>
        <img src="https://southern.ac.bd/wp-content/uploads/2024/06/logo-1.svg" alt="" width="200px"/>
          <h1>SUB Heart Disease Predictor</h1>
          <h4>We will ask you some questions to determine if you have any risk of cancer</h4>
          <Button onClick={startQuestion} css={btnCSS}>Begin</Button>

          <div style={{display: 'flex', justifyContent:"space-around", marginTop:"3em", border:"2px solid white", borderRadius:"10px"}}>
            <div style={{textAlign:"left", lineHeight:"10px", marginTop:"1em"}}>
              <h2>Supervisor</h2>
              <h4 style={{marginTop:"2em"}}>Arpita Chakrabaorty</h4>
              <p>Lecturer, Dept. Of CSE</p>
            </div>

            <div style={{marginTop:"1em", display:"block",  }}>
                <div style={{textAlign:"left", lineHeight:"2px"}}>
                  <h4>Aklimatul Jannat Akhi</h4>
                  <p>ID-666-53-05</p>
                </div>
                <div style={{textAlign:"left", lineHeight:"2px", marginTop:"2em"}}>
                  <h4>Rubina Akter</h4>
                  <p>ID-666-53-22</p>
                </div>
            </div>
          </div>
      </Intro>
  )
}

export default Start