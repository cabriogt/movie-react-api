// import { useState } from "react";

// function App() {
//   const [todo,setTodo] = useState("");
//   const [toDos,setToDoList]= useState([]);
//   const onChange=(e)=>setTodo(e.target.value);
//   const onSubmit=(e)=>{
//     e.preventDefault();
//     if(todo===""){
//       return;
//     }
//     setTodo("");
//     setToDoList((currentArray) => [todo,...currentArray]);

//   };
//   console.log(toDos);

//   return (
//     <div>
//       <h1>My todos <span>{toDos.length}</span></h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} 
//         value={todo} 
//         type="text" 
//         placeholder="Write your to  do list">
//         </input>
//         <br></br>
//         <button>Add Todo</button>
//       </form>
//       <ul>
//       {toDos.map((item,index)=><li key={index}>{item}</li>)}
//       </ul>

//     </div>
//   );
// }

// export default App;
