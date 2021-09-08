import Form from './components/form';
import Table from './components/table';
import { useState, useEffect } from 'react'
import { get } from './service/http';

const url = "http://localhost:3333/cars";

function App() {

  const [cars, setCars] = useState([]) 

  useEffect(() => {
    async function getCarros(){
      const response=await get(url)

      if(response.error) return;

      setCars(response);

    }
    getCarros()
    
  },[] )


  return (
   <div>
     <Form setCars={setCars} cars={cars} url={url}/>
     <Table setCars={setCars} cars={cars} url={url} />
   </div>
  ) 
}

export default App;
