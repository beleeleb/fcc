import React, { useEffect, useState } from "react";
import axios from "axios";
function Quote() {
  const [token, setToken] = useState("");

  const [quote, setQuote] = useState("");
  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    console.log(token);

    getToken();
  }, []);

  const getToken = async () => {
    const headers = {
      Authorization: "Token " + token // using Cognito authorizer
    };

    console.log(headers);
    const response = await axios.get(
      "https://api.paperquotes.com/apiv1/quotes/?tags=ocean&random=random&order=?",
      { headers }
    );
    setQuote(response.data.results[1].quote);
    // const data = await response.json();
  };

  return <>{quote}</>;
}

export default Quote;
