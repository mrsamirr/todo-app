import { useState } from "react";

export function CreateTodo() {
   //  react query
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   

   return <div> 
   <input id="title" style={{
      padding: 10,
      margin: 10
   }} type="text" placeholder="title" onChange={(e) => {
       const value = e.target.value;
   }}></input> <br/> 
   <input id="desc" style={{
      padding: 10,
      margin: 10
   }} type="text" placeholder="description"></input> <br/>

   <button style={{
      padding: 10,
      margin: 10
   }} onClick={async function() {
      app.use(express.json());
      // axios library
      await fetch("http://localhost:8000/todo", {
         method: "POST",
         body: JSON.stringify({
            title:title,
            description: description
         }),
           headers: {
            "Content-type": "application/json"
           }
       })
       .then(async function(res) {
         const json = await res.json();
         alert("Todo added");
       })
   }}> Add a Todo</button>

   </div>
}