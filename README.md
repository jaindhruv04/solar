# ☀️ Solar

A full-stack e-commerce web application built with **Node.js, Express, MongoDB, EJS, and Tailwind CSS**.

Solar is a backend-focused project built to explore how a complete server-rendered web application works, including authentication, product management, database integration, sessions, cookies, and server-side rendering.

## 🌐 Live Demo

**[Visit Solar](https://solar-9r6t.onrender.com/)**

> **Note:** Solar is hosted on Render. If the server has been idle, the first request may take a little longer to respond.

## 🚀 Features

* 🔐 **User registration and login**
* 🔑 **JWT-based authentication**
* 🍪 **HTTP-only authentication cookies**
* 🔒 **Password hashing with bcrypt**
* 👤 **User and owner/admin routes**
* 🛒 **Working shopping cart** (add/remove items, calculate bills)
* 🛍️ **Complete product management**
* 👨‍💼 **Owner/Admin panel** with product CRUD operations
* 🖼️ **Image upload** for products (Buffer storage)
* 🎨 **Customizable product colors** (background, panel, text)
* 💰 **Discount system** for products
* 🗄️ **MongoDB database integration with Mongoose**
* 💬 **Flash messages** for user feedback
* 📄 **Server-side rendering with EJS**
* 🎨 **Tailwind CSS** for responsive styling
* 🌐 **Express routing and middleware**
* ⚙️ **Environment variable configuration**
* 📱 **Responsive design** across devices

## 🛠️ Tech Stack

### Frontend

* EJS
* HTML
* CSS
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT
* bcrypt
* Express Session
* Cookie Parser
* Connect Flash

### Deployment

* Render

## 📁 Project Structure

```text
solar/
├── config/
│   ├── development.json          # Development environment config
│   ├── production.json           # Production environment config
│   ├── keys.js                   # Configuration keys
│   ├── mongoose-connections.js   # MongoDB connection setup
│   └── multer-config.js          # File upload configuration
├── controllers/
│   └── authController.js         # Authentication logic
├── middlewares/
│   ├── isAdmin.js               # Admin authorization middleware
│   └── isLoggedIn.js            # User authentication middleware
├── models/
│   ├── owner-models.js          # Owner/Admin data model
│   ├── product-model.js         # Product data model
│   └── user-model.js            # User data model
├── routes/
│   ├── index.js                 # Main application routes
│   ├── ownersRouter.js          # Owner/Admin routes
│   ├── productsRouter.js        # Product management routes
│   └── usersRouter.js           # User authentication routes
├── utils/
│   └── generateToken.js         # JWT token generation utility
├── views/
│   ├── partials/
│   │   ├── header.ejs           # Reusable header component
│   │   └── footer.ejs           # Reusable footer component
│   ├── admin.ejs                # Admin dashboard
│   ├── cart.ejs                 # Shopping cart page
│   ├── createproducts.ejs       # Product creation form
│   ├── editproduct.ejs          # Product editing form
│   ├── index.ejs                # Homepage
│   ├── owner-login.ejs          # Owner login page
│   ├── profile.ejs              # User profile page
│   └── shop.ejs                 # Products showcase page
├── public/
│   ├── images/                  # Static images
│   ├── javascripts/             # Client-side JavaScript
│   └── stylesheets/             # CSS files
├── postman/
│   └── collections/             # API testing collections
├── app.js                       # Main application entry point
├── package.json                 # Project dependencies
└── .env                         # Environment variables
```

## ⚙️ Installation

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

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
EXPRESS_SESSION_SECRET=your_session_secret
JWT_KEY=your_jwt_secret

# Server
PORT=3000
NODE_ENV=development
```

### 4. Start the application

```bash
node app.js
```

The application will run at:

```text
http://localhost:3000
```

## 🔌 API Endpoints

### User Authentication
- `GET /` - Homepage
- `POST /users/register` - Register a new user
- `POST /users/login` - User login  
- `GET /users/logout` - User logout
- `GET /profile` - User profile page (requires login)

### Shopping & Products
- `GET /shop` - Browse all products (requires login)
- `GET /addtocart/:productid` - Add product to cart (requires login)
- `GET /removefromcart/:productid` - Remove product from cart (requires login)
- `GET /cart` - View shopping cart with bill calculation (requires login)

### Owner/Admin Management
- `GET /owners/create` - Owner registration page
- `POST /owners/create` - Create owner account
- `GET /owners/login` - Owner login page
- `POST /owners/login` - Owner login
- `GET /admin` - Admin dashboard (requires admin login)
- `GET /owners/logout` - Owner logout

### Product Management (Admin Only)
- `GET /products/create` - Product creation page
- `POST /products/create` - Create new product with image upload
- `GET /products/edit/:id` - Edit product page
- `POST /products/edit/:id` - Update existing product
- `GET /products/delete/:id` - Delete product

## 🔐 Authentication Flow

Solar uses **bcrypt and JWT** to handle user authentication.

1. A user registers with their credentials.
2. The password is hashed using bcrypt before being stored.
3. A JWT is generated after successful authentication.
4. The token is stored in an HTTP-only cookie.
5. Authenticated routes can use the token to identify the user.
6. Logging out clears the authentication cookie.

## 📖 Usage

### For Regular Users
1. **Register/Login**: Create an account or login at the homepage
2. **Browse Products**: Visit `/shop` to see all available products
3. **Shopping Cart**: Add products to cart and view total with automatic bill calculation
4. **Profile Management**: Access your profile to view account details

### For Owners/Admins  
1. **Create Owner Account**: Register as an owner at `/owners/create`
2. **Admin Access**: Login to access the admin dashboard at `/admin`
3. **Product Management**: Create, edit, and delete products with image uploads
4. **Inventory Control**: Manage product colors, pricing, and discounts

### Key Features in Action
- **Smart Cart**: Automatic bill calculation with discounts and shipping (₹20)
- **Image Upload**: Products support image uploads stored as Buffer data
- **Color Customization**: Set background, panel, and text colors for products
- **Flash Messages**: Real-time feedback for all user actions
- **Responsive Design**: Works seamlessly across all devices

## 🧠 What I Learned

This project focuses on understanding the fundamentals of building a **server-rendered full-stack e-commerce application**.

Key concepts explored:

* **Express Architecture**: MVC-style separation with controllers, models, and views
* **Authentication & Security**: JWT tokens, bcrypt hashing, HTTP-only cookies
* **Database Integration**: MongoDB with Mongoose ODM, schema design, and relationships
* **File Upload Handling**: Multer configuration for product image uploads
* **Shopping Cart Logic**: Add/remove functionality with bill calculations
* **Admin Panel Development**: Role-based access control and product management
* **Server-Side Rendering**: Dynamic EJS templates with partials
* **Middleware Implementation**: Custom authentication and authorization middleware  
* **Flash Messaging**: User feedback system with connect-flash
* **Environment Configuration**: Multi-environment setup with config files
* **API Design**: RESTful routing patterns and HTTP methods
* **Session Management**: Express sessions with secure configuration
* **Production Deployment**: Render hosting with environment variables

## 🎯 Future Targets

* [ ] 📦 **Order Management System** - Complete order creation and tracking
* [ ] 💳 **Payment Integration** - Stripe/PayPal integration for secure payments
* [ ] 📧 **Email Notifications** - Order confirmations and user communications  
* [ ] 🔍 **Advanced Search & Filtering** - Category-based product filtering
* [ ] ⭐ **Product Reviews & Ratings** - User feedback system for products
* [ ] 📊 **Analytics Dashboard** - Sales tracking and inventory management
* [ ] 🚚 **Shipping Integration** - Real-time shipping cost calculation
* [ ] 📱 **Mobile App** - React Native companion app
* [ ] 🛡️ **Enhanced Security** - Rate limiting, input validation, CSRF protection
* [ ] 🧪 **Testing Suite** - Unit and integration tests with Jest
* [ ] 📈 **Performance Optimization** - Database indexing and caching
* [ ] 🌍 **Internationalization** - Multi-language support
* [ ] 🔄 **Real-time Updates** - WebSocket integration for live notifications

## 📌 Project Status

🚧 **In active development**

Solar is being developed as an **EJS-based full-stack application**. The project will continue to evolve with additional e-commerce functionality, security improvements, and backend features.

## 👨‍💻 Author

**Dhruv Jain**

* GitHub: [@jaindhruv04](https://github.com/jaindhruv04)

---

Built with **Node.js, Express, MongoDB, EJS, and Tailwind CSS**.
