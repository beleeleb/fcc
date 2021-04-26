import React, { useEffect, useState } from "react";
import axios from "axios";
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
  

  return <>quote: {quote.text} author:{quote.author}</>;
}

export default Quote;
