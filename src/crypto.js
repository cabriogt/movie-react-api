// import { useEffect, useState } from "react";


// function App() {

//   const [loading,setLoading]= useState(true);
//   const [coins,setCoins]=useState([]);
//   const [currency,setCurrency]=useState([]);

//   const onChange=(e)=>setCurrency(e.target.value.split(" ").filter(word => word.startsWith('$'))[0].slice(1));



//   useEffect(()=>{
//     fetch("https:api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json)=> {
//       setCoins(json);
//       setLoading(false);
//     });

//   },[])
  

//   return (
//     <div>
//       <h1>Crypto Currencies  {loading ? "" : <span>{coins.length}</span>}</h1>
//       {loading ? <strong>Loading ....</strong> : "" }

//       <select onChange={onChange} >
//         {coins.map((coin)=>
//           <option>
//             <h3>{coin.name}</h3> 
//             <strong> {coin.symbol}</strong> $ 
//             <span>{Math.round(coin.quotes.USD.price)}</span> USD
//           </option>
//         )}
//       </select>

//       <div>
//           <label htmlFor="dollar">Dollares</label>
//           <input 
//               value={currency} 
//               id="dollar"
//               type="number"
//           />
//       </div>
//       <div>
//           <label htmlFor="crypto">Coin</label>
//           <input
//               value={(currency/currency)}
//               id="crypto" 
//               type="number"
//           />
//       </div>

      
//     </div>


    
//   );
// }

// export default App;
