import React, { useState } from 'react'
import styled from 'styled-components'
import End from './End';
import {data} from '../Data.js'


const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #fff;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = () => {

  let [index, setIndex] = useState(0);
  let [quest, setQuest] = useState(data[index]);
  let[result, setResult] = useState(0);

  const checkAns = (e, ans)=>{
    if(quest.ans === ans){
      setIndex(++index);
      setQuest(data[index]);
      setResult(result + quest.val);
    }else{
      setIndex(++index);
      setQuest(data[index]);
    }
  }

  return (

    <div>
    
      {
        index === 8 ?
        <End res={result} />
        :
        <>
          <img src={quest.img} alt="image" width={200} style={{border:"2px solid white", borderRadius:20}} />
          <h1>{quest.question}</h1>
          <Options>
          <Option onClick={(e)=>{checkAns(e, 1)}}>{quest.option1}</Option>
          <Option onClick={(e)=>{checkAns(e, 2)}}>{quest.option2}</Option>
          </Options>
        </>
        
      }
      
    </div>
    
  )
}

export default Question