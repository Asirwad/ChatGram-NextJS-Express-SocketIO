# Chatgram: Telegram Clone

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

A full-stack Telegram clone featuring real-time messaging and video calling capabilities.

![Demo Screenshot](https://github.com/alishirani1384/chatgram/blob/main/demo.gif)

## ✨ Features

### Core Functionality
| Category              | Features                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| **Authentication**    | JWT-based registration & login, Session persistence                     |
| **Real-Time Chat**    | WebSocket messaging, Message history, Typing indicators                 |
| **Multimedia**        | Video calling (WebRTC), File attachments, Emoji support                 |
| **UI/UX**             | Responsive design, Dark/Light themes, Message animations                |

## 🚀 API Documentation

### Participant Token Generation
**Endpoint**  
`GET /api/get-participant-token`

**Request Parameters**
```json
{
  "userId": "string",
  "roomId": "string"
}
```

**Response**
```json
{
  "token": "eyJhbGci...",
  "expiresAt": "2025-02-07T18:30:00Z"
}
```

## 🛠️ Tech Stack

| Category  | Technologies                                                                 |
|-----------|------------------------------------------------------------------------------|
| **Frontend** | Next.js 13, TypeScript, Tailwind CSS, Zustand, React-Query, shadcn/ui       |
| **Backend**  | Node.js, Express, Socket.IO, MongoDB, Redis, JWT                           |
| **DevOps**   | Docker, GitHub Actions, ESLint, Prettier                                    |

## 📦 Installation

### ⚙️ Server

```bash
# Clone repository
git clone https://github.com/Asirwad/ChatGram-NextJS-Express-SocketIO.git
cd ChatGram-NextJS-Express-SocketIO/server

# Install dependencies
npm install

# Configure environment
cp client/.env.example client/.env.local
cp server/.env.example server/.env

# Start development
npm run dev
```

### 🪶 Client

```bash
cd ChatGram-NextJS-Express-SocketIO/client

# Install dependencies
npm install

# Start development
npm run dev
```

## 🌐 Environment Variables

| Variable                | Description                         | Example              |
|-------------------------|-------------------------------------|----------------------|
| `NEXT_PUBLIC_API_URL`   | Backend API base URL                | http://localhost:3001 |
| `MONGODB_URI`           | MongoDB connection string           | mongodb://localhost:27017 |
| `JWT_SECRET`            | JWT signing key                     | super_secret_key_123 |

## 📁 Project Structure

```
ChatGram-NextJS-Express-SocketIO/
├── client/            # Next.js frontend
│   ├── src/app/       # App router
│   └── src/components # UI components
└── server/            # Express backend
    ├── models/        # MongoDB models
    └── routes/        # API endpoints
```
