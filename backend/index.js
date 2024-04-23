const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types") 
const { todo } = require("./db")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
           message: "You sent the wrong inputs" ,
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
  
    res.json({
        message: "Todo Created"
    })
})


app.get("/todos", async function(req, res){
   const todos = await todo.find({});
   
   res.json({
    todos: todos
})

})

app.put("/completed",async function(req, res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
           message: "You sent the wrong inputs" ,
        })
        return;
    }
    await todo.update({
         _id: req.body._id
    },{
         completed: true
    })
    res.json({
        message: "Todo marked as completed"
    })
})

app.listen(8000, () => {
    console.log("The server is running");
});
