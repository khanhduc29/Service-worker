const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// API endpoint đơn giản
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

app.get('/api/data', (req, res) => {
    // res.json({ message: 'This is cached API data!' });
    res.status(500).json({ message: 'Internal Server Error' });
  });
  

  app.get('/svc/v1/trends/region', (req, res) => {
    // const keyword = req.query.keywords;
    // if (!keyword) {
    //   return res.status(400).json({ error: 'Keyword is required' });
    // }
  
    // const results = {
    //   type: 'region',
    //   keyword,
    //   results: [
    //     `Region Result 1 for "${keyword}"`,
    //     `Region Result 2 for "${keyword}"`,
    //     `Region Result 3 for "${keyword}"`,
    //   ],
    // };
  
    // res.json(results);
    res.status(500).json({ message: 'Internal Server Error' });
  });
  
  app.get('/svc/v1/trends/time', (req, res) => {
    // const keyword = req.query.keywords;
    // if (!keyword) {
    //   return res.status(400).json({ error: 'Keyword is required' });
    // }
  
    // const results = {
    //   type: 'time',
    //   keyword,
    //   results: [
    //     `Time Result 1 for "${keyword}"`,
    //     `Time Result 2 for "${keyword}"`,
    //     `Time Result 3 for "${keyword}"`,
    //   ],
    // };
  
    // res.json(results);
    res.status(500).json({ message: 'Internal Server Error' });
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
