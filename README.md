# AppointmentDashboard

This full-stack application manages appointments, featuring a React frontend and a Node.js backend.

Live demo: [Appointment Dashboard](https://appointment-dashboard-3mn7q68yo.vercel.app/)

## Project Structure

- `appointment-dashboard/`: Frontend React application
- `appointment-dashboard-backend/`: Backend Node.js server

## Frontend (appointment-dashboard)

The React frontend includes components for adding appointments, displaying appointment details, and a sidebar.

### Running Locally

1. Clone the repository:
   git clone https://github.com/RajatAgrawal117/AppointmentDashboard.git

2. Navigate to the frontend directory:
   cd AppointmentDashboard/appointment-dashboard

3. Install dependencies:
   npm install

4. Start the development server:
   npm run start

The app will be available at `http://localhost:3000`.

## Backend (appointment-dashboard-backend)

The Node.js backend uses Express and includes controllers, models, and routes for managing appointments.

### Setup and Running

1. Navigate to the backend directory:
   cd AppointmentDashboard/appointment-dashboard-backend

2. Install dependencies:
   npm install

3. Set up environment variables:
   - Create a `.env` file in the root of the backend directory
   - Add your MongoDB connection URL:
     MONGODB_URI=your_mongodb_connection_string

4. Start the server:
   node index.js

The server will start on the port specified in your environment variables (default: 3000).

## Features

- Add new appointments
- View appointment details
- Manage appointments through an intuitive interface

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB

