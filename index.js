const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users =[
  {id:1, name:'rahat', email:'rahat@gmail.com'},
  {id:2, name:'maruf', email:'maruf@gmail.com'},
  {id:3, name:'oli', email:'oli@gmail.com'}
]
app.get('/', (req, res) => {
  res.send('Users Management  server is Runnig')
})
app.get('/users',(req,res)=>{
  res.send(users);
})
app.post('/users',(req,res)=>{
  console.log('post api hitting');
  console.log(req.body);
  const newUser =req.body;
  newUser.id =users.length +1 ;
  users.push(newUser);
  res.send(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})