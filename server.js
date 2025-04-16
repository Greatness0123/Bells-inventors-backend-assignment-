const express = require('express');
const dotenv= require('dotenv').config()
const app = express();
app.get('/user', (req, res) => {
  res.send('hi my name is Greatness okorie ,i am a software engineer and i am currently learning node.js and express.js basically backend at the inventors community backend class');      
});
app.listen(process.env.PORT, () => {
  console.log   ('Server is running on http://localhost' + process.env. PORT +"/user");
});
 
const myself={
  name:"Greatness",
  age:"17",
  institution:"bells university of technology",
  level:"100",
  department:"computer science",
  courses:["MTH102","COS102","CSC104","GST112","ICT118","PHY102",]
}
const ear=["5"]
const number=[1,2,3];
number.forEach(num =>{
  console.log(num+=(ear));
})


let todos=[] ;

function addtodo(todo) {
   const todol = {
   key: todos.length + 1,
   name: todo,
   completed: false,
   };
 
 todos.push(todol);
 console.log('task added :', todol);   

}


function showtodo() {
  console.log("My todo list:");
  todos.forEach(todol => {
    const checkbox = todol.completed ? "(/)" : "( )";
    console.log(`${checkbox} ${todol.name}`);
  });
}

function updatetodo(key, newname) {
  todos = todos.map(todol => todol.key === key ? { ...todol, name: newname } : todol);
  console.log('Todo updated');
}

function findtodo(key) {
  const todo = todos.find(todol => todol.key === key);
  if (todo) {
    console.log('Todo found:', todo);
  } else {
    console.log('Todo not found');
  }
}

function deletetodo(key) {
  const initialLength = todos.length;
  todos = todos.filter(todol => todol.key !== key);
  if (todos.length < initialLength) {
    console.log('Todo deleted');
  } else {
    console.log('Todo not found');
  }
}



addtodo('eat');
addtodo('sleep');
addtodo('code');
addtodo('study');
addtodo('play');
addtodo('rest');

showtodo();

let keys = [1, 2, 4];
keys.forEach(key => {
  updatetodo(key, "drink water");
  findtodo(key);
  deletetodo(key);
});

showtodo();