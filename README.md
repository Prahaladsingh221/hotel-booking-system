# Hotel Booking System

![CI Status](https://img.shields.io/badge/CI-Passing-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-orange)
![Status](https://img.shields.io/badge/Project-Completed-success)

A modern, interactive hotel booking web application that simulates a real-world hotel reservation system. It allows users to search rooms, view details, calculate pricing, make bookings, and complete payments.

---

## Overview

This project demonstrates a complete **end-to-end booking workflow** including authentication, room selection, pricing logic, and booking management.

It integrates:
- Frontend development
- Simulated backend logic
- Docker containerization
- CI/CD automation using GitHub Actions

---

## Features

-  User Login System  
-  Room Search & Filtering  
-  Check-in / Check-out Selection  
-  Dynamic Price Calculation  
-  Room Details with Facilities  
-  Payment Page (Simulation)  
-  Booking Receipt  
-  My Bookings Page  
-  Responsive UI  

---

## Project Structure

```text
hotel-booking-system/
│
├── index.html
├── booking.html
├── details.html
├── payment.html
├── receipt.html
├── mybookings.html
├── login.html
├── admin.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── images/
│   ├── hotel.jpg
│   ├── room1.jpg
│   ├── room2.jpg
│   ├── room3.jpg
│   ├── room4.jpg
│   ├── room5.jpg
│   ├── room6.jpg
│   ├── room7.jpg
│   ├── room8.jpg
│   ├── room9.jpg
│   ├── room10.jpg
│   └── room11.jpg
│
├── test.js
├── backend-test.js
├── test_selenium.py
│
├── Dockerfile
├── .dockerignore
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
└── README.md

---

## Tech Stack

| Layer        | Technology |
|-------------|-----------|
| Frontend    | HTML, CSS, JavaScript |
| Backend     | LocalStorage (Simulated) |
| Testing     | Selenium, JavaScript |
| DevOps      | Docker, GitHub Actions |
| Versioning  | Git & GitHub |

---

## Architecture

- **Frontend:** UI rendering and user interaction  
- **Backend (Simulated):** Data handling via LocalStorage  
- **CI/CD:** Automated testing and build pipeline  
- **Docker:** Containerized deployment  

---

## 🐳 Docker Setup

### Build Image
```bash
docker build -t hotel-booking .