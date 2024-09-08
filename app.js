import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';

const app = express();
dotenv.config();

app.use(bodyParser.json());
// Serve static files from the "public" directory (e.g., HTML, CSS, JS)
// app.use(express.static('public'));
app.use(express.static(path.join(process.cwd(), 'public')));

// Serve images from the "data/images" directory
// app.use('/images', express.static('public/images'));

// Set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// GET route to fetch all meals
app.get('/meals', async (req, res) => {
  // const meals = await fs.readFile('./data/available-meals.json', 'utf8');
  // res.json(JSON.parse(meals));
  try {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.json(JSON.parse(meals));
  } catch (err) {
    res.status(500).json({ message: 'Error reading meals data' });
  }
});

// POST route to create a new order
app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (
    orderData === null ||
    orderData.items === null ||
    orderData.items.length === 0
  ) {
    return res.status(400).json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.'
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString()
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

// GET route to fetch all orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await fs.readFile('./data/orders.json', 'utf8');
    res.json(JSON.parse(orders));
  } catch (err) {
    res.status(500).json({ message: 'Error reading orders data' });
  }
});

// 404 handler for unmatched routes
app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
