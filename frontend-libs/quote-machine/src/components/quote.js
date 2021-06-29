import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
function Quote({ setBgColor, bgColor }) {
  const [token, setToken] = useState("");
  const [quote, setQuote] = useState({ text: "", author: "" });
  useEffect(() => {
    const num = Math.random() * 200;
    console.log("before floor" + num);
    console.log("after floor" + Math.floor(num));
    console.log("after tostring" + Math.floor(num).toString(16));
    console.log("after padding" + Math.floor(num).toString(16).padEnd(6,"0"));
//TODO: make decimal to rgb 
    setBgColor("#" + Math.floor(num).toString(16).padEnd(6,"0"));

    const response = axios
      .get("https://type.fit/api/quotes")
      .then(function(response) {
        // handle success
        console.log(response);

        const quoteRes =
          response.data[Math.floor(Math.random() * response.data.length)];
        setQuote({ text: quoteRes.text, author: quoteRes.author });
      });
  }, []);

  return (
    <Container bgColor={bgColor} id="quote-box">
      <QuoteText>{quote.text}</QuoteText>
      <QuoteAuthor>- {quote.author}</QuoteAuthor>
      <BtnsContainer>
        <Link bgColor={bgColor} id="tweet-quote" />
        <Link bgColor={bgColor} />
        <Btn
          bgColor={bgColor}
          onClick={() => window.location.reload()}
          id="new-quote"
        >
          New Quote
        </Btn>


      </BtnsContainer>
      <Tabs>
  <Tab><Span>rrrr</Span></Tab>
</Tabs>
    </Container>
    
  );
}

const Tabs = styled.ul`
    display: flex;
    width: 100%;
    margin-top: 2em;
    
`;

const Tab = styled.li`
    display: flex;
    font-family: "Raleway";
    font-size: 25px;
    border-bottom: 3px solid transparent;
    background-image: linear-gradient(rgba(0, 145, 148, 1), rgba(72, 71, 112, 1)), rgba(0,255,0,1))
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px 	rgba(248, 248, 255,1) inset;
    cursor: pointer;
    outline: none;
`;

const Span = styled.span`
    font-weight: 800;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-image-source: repeating-linear-gradient(45deg, transparent, #4d9f0c 20px);
    background-image: rgba(0,255,0,1);
`;


const Container = styled.div`
  background-color: white;
  width: 500px;
  font-family: "Raleway";
  color: ${props => props.bgColor};
  transition: color 2s;

  padding: 20px 20px 20px 20px;
  display: grid;
  grid-template-rows: 1fr 50px;
`;

const QuoteText = styled.div`
font-size: 32px;
text-align: center;
`

const QuoteAuthor = styled.div`
font-size: 20px;
justify-self: end;
align-self: center;
`

const BtnsContainer = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 45px 45px 1fr;
  `;

const Link = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${props => props.bgColor};
  transition: background-color 2s;

  border: 0;
  outline: none;
  color: white;
`;

const Btn = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${props => props.bgColor};
  transition: background-color 2s;

  border: 0;
  outline: none;
  color: white;
  justify-self: end;
`;
export default Quote;
