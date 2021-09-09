import Form from "./components/form";
import Table from "./components/table";
import { useState, useEffect } from "react";
import { get } from "./service/http";
import Header from "./components/header";
import { createGlobalStyle } from "styled-components";

const url = "http://localhost:3333/cars";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCarros() {
      const response = await get(url);

      if (response.error) return;

      setCars(response);
    }
    getCarros();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Form setCars={setCars} cars={cars} url={url} />
      <Table setCars={setCars} cars={cars} url={url} />
    </div>
  );
}

const GlobalStyle = createGlobalStyle` 
 html {
    font-size: 100%;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
body {
    font-family: system-ui, sans-serif;
    margin: 0;
    background-color: #d8d3d3;
}

`;

export default App;
