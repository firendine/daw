const express = require('express')

const app = express()
const port = 81

app.get('/',(request, response)=>{
   // response.status(500);
    response.send('Hello from get!');
})

app.post('/',(request, response)=>{
    // response.status(500);
     response.send('Hello from post!');
 })

 
app.delete('/parada/38',(request, response)=>{
    // response.status(500);
     response.send('Borrada la parada 38');
 })
 app.delete('/parada/39',(request, response)=>{
    // response.status(500);
     response.send('Borrada la parada 39');
 })


app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`)
})