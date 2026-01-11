import express from "express";

const app = express();

app.get('/',(req,res) => {
    res.send('Hello Dmitriy!');
});
app.listen(4444,(error) => {
    if(error){
      return console.log(err)
    }

    console.log('server OK');
});


