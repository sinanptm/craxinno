# 📋 Craxinno 


![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 🚀 Live Demo

- ✨ Frontend: [task-management-sinanptms.vercel.app](https://craxinno.vercel.app)
- 🔌 Backend API: [task.avm-ayurvedic.online/tasks](https://task.avm-ayurvedic.online)


### Frontend Technologies
```
├── React + TypeScript
├── Vite (Build Tool)
├── ShadCN UI (Component Library)
├── Axios
└── TailwindCSS
```

### Backend Technologies
```
├── Node.js + Express
├── TypeScript
├── MongoDB
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v22+)
- pnpm
- MongoDB Atlas account

### Installation

1. **Clone the repository**
```bash
git clone git@github.com:sinanptm/craxinno.git crx
cd crx
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment variables**

📁 For client (`client/.env`):
```env
VITE_API_URL=http://localhost:8000
```

📁 For server (`server/.env`):
```env
PORT=8000
MONGO_URI=mongodb+srv://yourmail:yourpassword@cluster0.8ysyzic.mongodb.net/Task_Management?retryWrites=true&w=majority&appName=Cluster0
CLIENT_URL=http://localhost:3000
```

4. **Start the development servers**
```bash
pnpm dev
```

🌐 Frontend: [http://localhost:3000](http://localhost:3000)
🔌 Backend: [http://localhost:8000](http://localhost:8000)

## 📡 API Endpoints

| Method | Endpoint          | Description             |
|--------|-------------------|-------------------------|
| POST   | /createUser       | Create User             |
| PUT    | /updateUser/:id   | Update an existing user |

## 🚀 Deployment

### Current Deployment Status
- ✅ Frontend: Deployed on Vercel
- ✅ Backend: AWS with Nginx reverse proxy
- ✅ Database: MongoDB Atlas

### Infrastructure
```
├── Frontend: Vercel
├── Backend: AWS + Nginx
├── Database: MongoDB Atlas
└── Domain: Custom configuration with subdomain
```

## 🤖 AI Assistance & Tools

This project leveraged various AI tools for enhanced development:

### V0 AI
- 🎨 UI/UX design assistance
- 🧩 Styled component generation

### Claude AI
- 📚 Documentation generation
- 🔍 Code review and analysis
- 📋 Technical writing

