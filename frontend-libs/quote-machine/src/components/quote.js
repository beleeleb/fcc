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
      {quote.text} author:{quote.author}
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
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 500px;
  font-size: 40px;
  font-family: "Raleway";
  color: ${props => props.bgColor};
  transition: color 2s;

  padding: 20px 20px 20px 20px;
`;

const BtnsContainer = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 5px;
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
`;
export default Quote;
