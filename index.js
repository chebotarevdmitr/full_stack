import express from "express";

const app = express();

app.get('/',(req,res) => {
    res.send('hello dima!');
});
app.listen(4444,(error) => {
    if(error){
      return console.log(err)
    }

    console.log('server OK');
});


