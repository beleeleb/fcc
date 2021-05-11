import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from 'styled-components'
function Quote() {
  const [token, setToken] = useState("");

  const [quote, setQuote] = useState({text:"", author:""});
useEffect(()=>{
    const response =  axios.get(
      "https://type.fit/api/quotes"
    ).then(
      function (response) {
        // handle success
        console.log(response);
        const quoteRes = response.data[Math.floor(Math.random() * response.data.length)];
        setQuote({text:quoteRes.text, author:quoteRes.author});
      }
    )

    },[]);
  

  return <Container>{quote.text} author:{quote.author}</Container>;
}

const Container = styled.div`
background-color:blue;
width:500px;
font-size: 40px;
font-family: "Raleway";
`

export default Quote;
