# 🚗 CarRental — Online Car Rental Platform

A modern, full-featured car rental web application that allows users to browse, compare, and book vehicles online with ease.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 📖 About the Project

CarRental is a web-based platform that connects users with available rental vehicles. Users can search by location, date, and car type, compare pricing and specifications, and complete secure online bookings — all from a responsive, easy-to-use interface.

## ✨ Features

- 🔍 **Search & Filter** — Find cars by location, price range, transmission type, fuel type, and more
- 📅 **Real-Time Availability** — Live calendar showing vehicle availability
- 💳 **Secure Online Booking** — Integrated payment gateway for seamless checkout
- 👤 **User Accounts** — Sign up, log in, and manage bookings from a personal dashboard
- 🚙 **Vehicle Listings** — Detailed car pages with photos, specs, and customer reviews
- 🛠️ **Admin Panel** — Manage fleet, bookings, pricing, and users
- 📱 **Responsive Design** — Fully optimized for desktop, tablet, and mobile
- ⭐ **Ratings & Reviews** — Customers can leave feedback on their rental experience
- 📧 **Email Notifications** — Automated booking confirmations and reminders

## 🛠️ Tech Stack

**Frontend:**
- React.js 
- Tailwind CSS


**Backend:**
- Node.js + Express.js
- MYSQL

**Other Tools:**
- JWT Authentication
- Cloudinary (image hosting)


## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn
- MYSQL

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TONY-OCHIENG/carRental.git
   cd carrental
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (see below)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:3000`

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_API_KEY=your_cloudinary_api_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

## 💻 Usage

1. Browse available cars
2. Choose a vehicle and view detailed specs
4. Log in or create an account to proceed
5. Manage or cancel bookings from your dashboard

## 📁 Project Structure

```
carrental/
├── client/               # Frontend application
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── public/
├── server/                # Backend application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── config/                # Configuration files
├── .env.example
├── package.json
└── README.md
```

## 📸 Screenshots
![image alt](https://github.com/TONY-OCHIENG/CarRental/blob/main/screenshot/Screenshot%20From%202026-07-10%2016-21-33.png)
![image alt](https://github.com/TONY-OCHIENG/CarRental/blob/6c1dee3896b56fa8c6f7cc3277359892dab7e0fa/screenshot/Screenshot%20From%202026-07-10%2016-24-56.png)
![image alt](https://github.com/TONY-OCHIENG/CarRental/blob/b51024d57a92c8e541595b6a0a9d1a9748bb3927/screenshot/Screenshot%20From%202026-07-10%2016-23-00.png)
![image alt](https://github.com/TONY-OCHIENG/CarRental/blob/da42a548ee8415086685cb806dc14eb3ad10dce5/screenshot/Screenshot%20From%202026-07-10%2016-22-50.png)
![image alt](https://github.com/TONY-OCHIENG/CarRental/blob/441ab1267955de5947db7ad30869d03cfe980ecd/screenshot/Screenshot%20From%202026-07-10%2016-22-39.png)
![image alt](https://github.com/TONY-OCHIENG/CarRental/blob/631651be8d24e5b645075be193701e859db61f6d/screenshot/Screenshot%20From%202026-07-10%2016-22-06.png)


> Add screenshots or GIFs of your homepage, search results, and booking flow here.

## 🗺️ Roadmap

- [ ] Add multi-language support
- [ ] Integrate GPS-based car tracking
- [ ] Add loyalty/rewards program
- [ ] Implement live chat support
- [ ] Add dark mode

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request



## 📬 Contact

**Project Maintainer** — tonyochiengdh@gmail.com

Project Link: [https://github.com/TONY-OCHIENG/carRental](https://github.com/TONY-OCHIENG/carRental)
