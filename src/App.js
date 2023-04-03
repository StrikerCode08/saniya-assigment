import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(`https://api.chucknorris.io/jokes/random?count=${page}`)
        const response = await res.json();
        setData(response)
      }
      getData()
    } catch (error) {
      console.log(error);
    }
  }, [page])

  return (
    <div>
      <img src={data.icon_url} alt={data.icon_url} />
      <p>{data.value}</p>
      <button onClick={()=>{setPage(page+1)}} >Load more</button>
    </div>
  );
}

export default App;
