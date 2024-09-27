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

const MainBox = styled.div`
  display: block; 
  flex-direction: row;
  justify-content:space-around;
  margin-top:3em; 
  border:none;
  border-radius:10px;
  line-height:2px;

  @media screen and (min-width: 470px){
    display: flex;
    border:2px solid white;
  } 
`;

const SubBox = styled.div`
text-align: left; 
line-height: 2px;
padding-left: 1em;
margin-bottom: 1em;

@media screen and (max-width: 470px){
  border:2px solid white;
  border-radius: 10px;
  padding-bottom:.7em;
}
`
const Badge = styled.span`
  background:white;
  color:black;
  padding:1px 3px; 
  border-radius:10px;
  font-weight: bold;
`

const Start = ({props}) => {
  const startQuestion = () => props(true)
 
  return (
      <Intro>
        <img src="https://southern.ac.bd/wp-content/uploads/2024/06/logo-1.svg" alt="" width="200px"/>
          <h1>SUB Heart Disease Predictor</h1>
          <h4>We will ask you some questions to determine if you have any risk of heart disease</h4>
          <Button onClick={startQuestion} css={btnCSS}>Begin</Button>

          <MainBox>
            <SubBox>
              <h3 style={{marginBottom:"1.5em", marginTop:"1.5em"}}><span style={{border:"1px solid white", borderRadius:"10px", padding:"0px 5px 2px 5px"}}>Supervisor</span></h3>
              <h4>Arpita Chakrabaorty</h4>
              <p>Lecturer, Dept. Of CSE</p>
            </SubBox>

            <SubBox>
                <h3 style={{marginBottom:"1.5em", marginTop:"1.5em"}}><span style={{border:"1px solid white", borderRadius:"10px", padding:"0px 5px 2px 5px"}}>Submitted By</span></h3>
                <div style={{marginBottom: "2em"}}>
                  <h4>Aklimatul Jannat Akhi</h4>
                  <p><Badge>ID-666-53-05</Badge></p>
                </div>
                <div>
                  <h4>Rubina Akter</h4>
                  <p><Badge>ID-666-53-22</Badge></p>
                </div>
            </SubBox>
          </MainBox>
      </Intro>
  )
}

export default Start