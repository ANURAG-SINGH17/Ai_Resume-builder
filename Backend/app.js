const express = require('express');
const app = express();
const connectTODB = require('./config/mongoose.connection');
const cookiesParser = require('cookie-parser');
const cors = require('cors');
connectTODB();
const path = require('path');

const usersRouter = require('./routes/user.routes')
const aiRouter = require('./routes/ai.routes')

app.use(cors({
    origin: 'https://ai-resume-builder-eqgf02580-anurag-singh-coders-projects.vercel.app/',
  }));
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({extended:true}));

const _dirname = path.resolve();

app.use('/users', usersRouter)
app.use('/ai', aiRouter)

// app.use(express.static(path.join(_dirname , "/frontend/dist")))
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(_dirname , 'frontend' , 'dist' , 'index.html'));
// })

app.get('/' , (req , res) => {
    res.send('hello server is start you are now in  / route')    
})

module.exports = app;