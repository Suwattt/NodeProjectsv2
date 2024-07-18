const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');
const apiv2Router = require('./routes/apiv2');

const app = express();
app.use(express.json());
app.use(cors({
origin: true,
credentials: true
}));

app.use('/api/v1', apiRouter);
app.use('/api/v2', apiv2Router);


const port = 8080;
app.listen(port, () => {
console.log("Server listening on port:" + port);
});