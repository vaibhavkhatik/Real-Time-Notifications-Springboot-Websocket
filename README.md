# Real-Time Notifications System with Spring Boot and WebSocket

This repository demonstrates how to build a **real-time notification system** using **Spring Boot** and **WebSocket**. It is designed for instant updates in applications such as chat systems, order tracking, and admin-triggered notifications.

---

## Features

- **Real-Time Communication**: Bi-directional WebSocket communication between clients and the server.
- **Order Tracking System**: Track order statuses in real-time with step-wise progress indicators.
- **Admin Dashboard**: Allows admins to send bulk notifications or update order statuses.
- **Scalable Architecture**: Designed for flexibility and growth, with optional integration for messaging queues.
- **Client Feedback System**: Collect star ratings from users once orders are completed.

---

## Repository: [Real-Time-Notifications-Springboot-Websocket](https://github.com/18-RAJAT/Real-Time-Notifications-Springboot-Websocket)

---

![Flow1](https://github.com/user-attachments/assets/32ce5a87-81b2-4996-be38-5c5efff0db62)

---
## Technologies Used

1. **Backend**:
   - Spring Boot
   - WebSocket with STOMP for real-time communication
   - Maven for project management
2. **Frontend**:
   - HTML, CSS, JavaScript for static clients
   - Font Awesome for icons
3. **Optional Enhancements**:
   - Integration with RabbitMQ/Kafka for distributed messaging
   - RESTful APIs for further backend capabilities

---

## Installation and Setup

Follow the steps below to set up and run the application:

### Prerequisites

- Java 17 or later installed
- Maven installed
- A web browser for testing the frontend clients

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/vaibhavkhatik/Real-Time-Notifications-Springboot-Websocket.git
   cd Real-Time-Notifications-Springboot-Websocket
   ```
2. Build the project:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
4. Open the client files in a browser:
   - Client Page: Open `client1.html` from `src/main/resources/templates/`
   - Admin Panel: Open `admin.html` from the same directory

---



<img width="956" alt="Screenshot 2024-12-24 134534" src="https://github.com/user-attachments/assets/c2cdefb9-b09a-4131-9477-ea9ded1ec7fc" />


---
## How It Works

### WebSocket Connection
- The server establishes WebSocket connections with clients using the STOMP protocol.
- Clients subscribe to a notification topic (`/status/notification`) for real-time updates.

### Order Tracker
- Displays step-wise progress (e.g., "Order Received," "Order Dispatched").
- Automatically updates client pages when order statuses are updated by the admin.

### Admin Dashboard
- Provides a simple interface for admins to trigger notifications.
- Updates the status of orders in bulk or individually.

### Rating System
- Clients can rate their experience after an order is delivered.
- Displays a star-based rating widget.

---

