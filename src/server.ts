import * as express from 'express';
 
const app = express();
const port = 3000;
 
app.get('/', (request, response) => {
    response.send('Hello world!');
});
 
app.listen(port, () => {
    console.log(`Server is running at port ${port}!`)
});
