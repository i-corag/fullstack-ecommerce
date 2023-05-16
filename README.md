# Full Stack Ecommerce Web App

[KOFFIE](https://ecommerce-fontend.vercel.app/) - Visit the website! ☕️ 🤎

The frontend is a **React App** bootstrapped with **Vite**.
The backend was built with **Node.js** and **Express.js**
The database is **MySQL.**

- Libraries used on the client side:
  **Axios, Zustand, React Query, React Router, React Hook Form, Yup, Tailwind CSS**
- Libraries used on the server side:
  **Express-session, Cookie-parser, Body-parser, Bcrypt , Cors, Mysql2, Sequelize, Dotenv**

### ✨ App features:

- Browse categories, products and their details, filter by name and sort by price
- Add products to a wishlist
- Add products to cart and place order
- Register and login
- Also has an Admin Portal with CRUD operations for the products, categories, brands, users and orders.

### 🚀 In order to run this project you need to:

1. Create a schema is MySQL
2. Use the file to import the data to mysql schema: ![](koffie.sql)
3. git clone https://github.com/i-corag/fullstack-ecommerce.git
4. add some env on the server: SESSION_SECRET, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT
5. Start both the client and the API:

```sh
cd server
npm i
npm run dev
```

```sh
cd client
npm i
npm run dev
```

## Development

Want to contribute? Great! 🙌🏻🙌🏽🙌🏾🙌🏿
