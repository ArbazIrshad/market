const app = require('./main');

const port = '8888';

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});