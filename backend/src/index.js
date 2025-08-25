const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const users = require('./routes/authRoutes.js');

const PORT = 3000;


app.use(express.json());
app.use('/api',users)
// -> /api/users -> 
connectDB();

// app.get('/',(req,res)=>{
//   console.log("I am inside the homepage router")
// res.send("Welcome to Time-Talk chat application");
// })

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})
// ------------------------ Basic Routing ----------------------------------
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;


// const item = require("./routes/authRoutes");
// item.use('/api',item);

// Start Server
// app.listen(PORT, () => {
//     console.log("Server running on port 3000");
// });


// -----------------------middlewares-----------------------------------------
// const express = require('express')
// const app = express()
// const port = 3000

// load the middleware into the application
// in-built middleware 
// app.use(express.json());

// the middleware should be above the route handler.(app.get...)
// const loginMiddleware = function (req,res,next)
// {
//   console.log('Logged In');
//   // to move to the next middleware
//   next();
// }
// app.use(loginMiddleware);

// const authMiddleware = function (req,res,next)
// {
//   console.log('authenticated');
//   // to move to the next middleware
//   next();
// }
// app.use(authMiddleware);

// const validateMiddleware = function (req,res,next)
// {
//   console.log('validated');
//   // to move to the next middleware
//   next();
// }
// app.use(validateMiddleware);

// app.get('/', (req, res) => {
//   console.log(req.body);
//   res.send('Hello World!');
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// --------------- authentication based middleware------------------
// const express = require('express');
// const app = express();
// const PORT = 3000;

// const route = require('./routes/authRoutes');

// // mount the route 
// app.use('/user' , route)

// //  -> /user/student
// //  -> /user/admin

// app.listen(PORT, () =>{
//   console.log(`Server running in ${PORT}`);
// })