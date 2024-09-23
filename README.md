# FoodOrderApp - Backend

## Overview

This is the backend for a React-based food ordering app. It is built with Node.js and Express, serving as the API that handles meal data and order processing. The backend integrates with Stripe for secure payment processing and uses file-based storage for managing meals and orders.

<a href="https://junmike-food-order.netlify.app/" target="_blank">View Live Website</a>
</br>
<img src="https://raw.githubusercontent.com/MichaelDAbadJr/assets/refs/heads/main/FoodOrder-Cover.jpg" width="500">

link to the frontend repository -->
<a href="https://github.com/MichaelDAbadJr/FoodOrderApp-Frontend/" target="_blank">FoodOrderApp-Frontend Repository</a>

## Features

- **Meal Management:** Provides a GET endpoint to fetch available meals from a JSON file..
- **Order Creation:** Allows users to place orders via a POST endpoint, validating order data and storing it in a JSON file.
- **Payment Integration:** Supports payment processing using Stripe, creating payment intents for seamless transactions.
- **Order Retrieval:** Offers a GET endpoint to fetch all orders placed by users.
- **CORS Support:** Configured to allow cross-origin requests, enabling the frontend to communicate with the backend.
- **Error Handling:** Includes robust error handling for API calls, ensuring user-friendly feedback for issues.

## Getting Started

### Prerequisites

- Node.js and npm install.
- Familiarity with Express, Stripe, and JSON file handling in Node.js.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MichaelDAbadJr/FoodOrderApp-Backend
   ```

2. **Navigate to the project directory:**

   ```sh
   cd FoodOrderApp-Backend
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

   or

   ```
   yarn install
   ```

4. **To start the development server, use:**

   ```sh
   npm start
   ```

   or

   ```
   yarn start
   ```

5. **Usage:**
   Once the development server is running, open your browser and navigate to http://localhost:5173 or the appropriate localhost on your machine to demo the app. You will need your own STRIPE_SECRET_KEY set up in the environment variables in the .env file.

6. **License:**
   This project is licensed under the MIT License. See the LICENSE file for details.
