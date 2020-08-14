const express = require('express');
const app = express();

app.get('/api/sum', (req, res) => {
  const left = Number(req.query.left);
  if (Number.isNaN(left)) {
    res.json({ message: `left is not a number.` });
    return;
  }

  const right = Number(req.query.right);
  if (Number.isNaN(right)) {
    res.json({ message: `right is not a number.` });
    return;
  }

  const sum = left + right;
  res.json({ result: sum });
});

app.listen(5846, () => console.log('Listening on port 5846'));
