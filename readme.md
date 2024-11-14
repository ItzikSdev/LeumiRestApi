# Leumi Full Stack Position Project

### Node.js Project - Product Availability in Stock

This project was developed as part of the application process for a Full Stack position at Leumi. It is a Node.js API that checks product availability in stock using the [Fake Store API](https://fakestoreapi.com/products).


### How to Run This Project

1. **Set Up Environment Variables**  
   Create a `.env` file in the root directory of the project if it doesn’t already exist. Add the following environment variables:

   ```env
   NODE_ENV=dev
   REST_API=https://fakestoreapi.com/products
   PORT=3002
   
2. **Installation**
    npm install or pnpm i

3. **Running**
    npm run dev or pnpm run dev

---

### Overview of API Features and Functionality

1. **Posting a New Order with Insufficient Stock**  
   This image shows an attempt to post a new order with a list of products and quantities where the requested quantities exceed available stock.
   
   ![Order with Insufficient Stock](images/Screenshot%202024-11-14%20at%2017.30.00.png)

2. **Posting a Valid New Order**  
   Here, a new order is posted with products and quantities that meet the stock availability requirements.
   
   ![Valid Order](images/Screenshot%202024-11-14%20at%2017.22.26.png)

3. **Retrieving an Approved Order**  
   This image demonstrates fetching an order by ID, showing the approved status based on the product list and quantity.
   
   ![Get Approved Order](images/Screenshot%202024-11-14%20at%2017.22.46.png)

4. **Deleting an Order by ID**  
   Shows an order deletion operation using the order ID.
   
   ![Delete Order by ID](images/Screenshot%202024-11-14%20at%2017.23.07.png)

5. **Attempting to Retrieve a Deleted Order**  
   This image shows an attempt to fetch the order again after it has been deleted.
   
   ![Attempt to Retrieve Deleted Order](images/Screenshot%202024-11-14%20at%2017.23.27.png)

