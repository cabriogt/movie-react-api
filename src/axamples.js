// import { useState,useEffect } from "react";
// function Hello(){

//   useEffect(()=>{
//     console.log("Created :)")
//     return()=> console.log("destroy :(");
//   },[]);

//   return(    
//     <h1>Hello</h1>
//   )
// }

// function App() {

//   const [showing,setShowing] = useState(false);
//   const onClick= () =>setShowing((prev )=> !prev);


//   const [counter,setValue] = useState(0);
//   const[keyword,setKeyword]= useState("");

//   const onClick=()=> setValue((prev)=> prev +1)
//   const onChange=(event)=> setKeyword(event.target.value);
  
//   useEffect(() => {
//     console.log("I run only once.")}
//   ,[]);

//   useEffect(() =>{
//     console.log("I run when keyword changes");
//   },[keyword]);

//   useEffect(() =>{
//     console.log("I run when counter changes");
//   },[counter]);

//   useEffect(() =>{
//     console.log("I run when counter and keyword changes");
//   },[counter,keyword]);

//   return (
//     <div>
//       <input value={keyword} 
//       onChange={onChange} 
//       type="text" 
//       placeholder="Search Here ..."></input>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//     <div>
//       {showing ? <Hello/> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>

//     </div>
//   );
// }

// export default App;