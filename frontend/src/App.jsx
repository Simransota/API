// App.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async ()=>{
      try{
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data)
      }catch(error){
        setError(false)
      }
    })()
  }, []);

  if(error){
    <h1>Something went wrong </h1>
  }

  return (
    <>
      <h1>Simran</h1>
      <p> The number of products : {products.length}</p>
      
    </>
  );
}

export default App;
