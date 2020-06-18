const express = require('express');
const app = express();

const PORT = 6060;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Success!'})
} )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));