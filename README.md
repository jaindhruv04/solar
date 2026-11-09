# Solar

A server-rendered e-commerce application built with **Node.js, Express, MongoDB, Mongoose, EJS, and Tailwind CSS**.

Solar demonstrates core full-stack web development workflows: user authentication, protected pages, product catalog management, image uploads, admin operations, and shopping-cart calculations.

**Live application:** [https://solar-9r6t.onrender.com/](https://solar-9r6t.onrender.com/)

> Hosted on Render. The first request may take longer after a period of inactivity.

## Features

### Customer experience
- User registration and login with bcrypt password hashing.
- JWT-based authentication stored in an HTTP-only cookie.
- Protected shop, profile, and cart pages.
- Product catalogue with images, pricing, and discount display.
- Add products to and remove products from a shopping cart.
- Cart total calculation using product discounts and a fixed ₹20 platform fee.
- Profile editing, including profile picture upload and contact details.
- Flash messages for user feedback.

### Admin experience
- Admin-protected dashboard for viewing products.
- Create, edit, and delete product listings.
- Product image uploads using Multer memory storage.
- Configure product price, discount, background color, panel color, and text color.
- Authentication and admin middleware for product-management operations.

### Application structure
- MVC-style separation across routes, controllers, models, middleware, and EJS views.
- MongoDB persistence with Mongoose models.
- Server-side rendering with reusable EJS partials.
- Environment-based configuration and Render deployment.

## Tech stack

| Layer | Technologies |
|---|---|
| Runtime | Node.js |
| Server | Express 5 |
| Database | MongoDB |
| ODM | Mongoose |
| Views | EJS |
| Styling | Tailwind CSS, HTML, CSS, JavaScript |
| Authentication | JSON Web Tokens, bcrypt |
| Middleware and utilities | Express Session, cookie-parser, connect-flash, Multer, dotenv |
| Deployment | Render |

## Application flow

1. A visitor registers or logs in through the application.
2. Passwords are hashed with bcrypt before being stored.
3. After successful authentication, the server issues a signed JWT in an HTTP-only cookie.
4. Authentication middleware verifies the token and loads the corresponding user for protected routes.
5. Customers browse products and manage their cart. Cart entries are stored as product references in the user's MongoDB document.
6. Admin middleware protects product-management pages and operations.

## Project structure

```text
solar/
├── config/
│   ├── development.json
│   ├── production.json
│   ├── keys.js
│   ├── mongoose-connections.js
│   └── multer-config.js
├── controllers/
│   └── authController.js
├── middlewares/
│   ├── isAdmin.js
│   └── isLoggedIn.js
├── models/
│   ├── owner-models.js
│   ├── product-model.js
│   └── user-model.js
├── routes/
│   ├── index.js
│   ├── ownersRouter.js
│   ├── productsRouter.js
│   └── usersRouter.js
├── utils/
│   └── generateToken.js
├── views/
│   ├── partials/
│   ├── admin.ejs
│   ├── cart.ejs
│   ├── createproducts.ejs
│   ├── editproduct.ejs
│   ├── index.ejs
│   ├── owner-login.ejs
│   ├── profile.ejs
│   └── shop.ejs
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── postman/
│   └── collections/
├── app.js
└── package.json
```

## Getting started

### Prerequisites
- Node.js and npm
- A MongoDB database (local or hosted)

### 1. Clone the repository

```bash
git clone https://github.com/jaindhruv04/solar.git
cd solar
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret
EXPRESS_SESSION_SECRET=your_session_secret
NODE_ENV=development
PORT=3000
```

Use your own secret values. Do not commit the `.env` file or expose production credentials.

### 4. Run the application

```bash
node app.js
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

The following routes are defined in the application. Admin pages and product operations require an authenticated admin account.

| Method | Route | Purpose | Access |
|---|---|---|---|
| GET | `/` | Render the homepage | Public |
| GET | `/shop` | Browse products | Authenticated |
| GET | `/profile` | View profile | Authenticated |
| GET | `/cart` | View cart and calculated total | Authenticated |
| GET | `/addtocart/:productid` | Add a product to the cart | Authenticated |
| GET | `/removefromcart/:productid` | Remove a product from the cart | Authenticated |
| POST | `/users/register` | Register a customer | Public |
| POST | `/users/login` | Log in a customer | Public |
| GET | `/users/logout` | Log out a customer | Public |
| POST | `/users/profile` | Update profile details and picture | Authenticated |
| GET | `/owners/admin` | View admin product dashboard | Admin |
| GET | `/owners/admin/create` | Open product creation form | Admin |
| POST | `/products/create` | Create a product with an image | Admin |
| GET | `/owners/admin/edit/:productid` | Open product edit form | Admin |
| POST | `/owners/admin/edit/:productid` | Update a product | Admin |
| GET | `/owners/admin/delete/:productid` | Delete a product | Admin |

## Implementation notes

- Product images are received through Multer memory storage and stored as binary buffers in MongoDB.
- Cart items are stored as MongoDB ObjectId references to product documents and populated when the cart page is rendered.
- The cart calculation applies each product's discount and adds a fixed ₹20 platform fee.
- The JWT contains the user's email and ID and is configured to expire after one day.
- The current admin middleware authorizes a specific email address. This is a project-level authorization approach, not a general multi-role permissions system.

## Current scope and limitations

Solar currently demonstrates product browsing, customer account flows, cart management, and admin product CRUD. It does **not** currently implement order placement, payment processing, or order tracking. The cart's checkout button is a UI element and is not connected to a checkout flow. The repository does not currently include an automated test suite.

## Author

**Dhruv Jain**  
[GitHub: @jaindhruv04](https://github.com/jaindhruv04)

---

Built with Node.js, Express, MongoDB, and EJS.
