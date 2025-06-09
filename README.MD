# 🚶 EchoWalk

EchoWalk is an innovative web application currently under active development. It is designed to simplify and enhance the experience of indoor navigation using modern web technologies and location-based services.

---

## 📌 Project Status

🚧 **Work In Progress**  
This repository marks the beginning of the EchoWalk project. Initial setup is complete, and development is actively underway.

- ✅ Project structure initialized
- ✅ Vite + React client setup
- ✅ Express + Node.js server setup
- ✅ MongoDB connection integration initiated
- 🔜 API development
- 🔜 Frontend design and integration
- 🔜 Deployment

---

## 📁 Tech Stack

### Frontend:
- **React.js** (with Vite)
- **Tailwind CSS** (planned)
- **React Router** (for navigation)

### Backend:
- **Node.js**
- **Express.js**
- **Mongoose** for MongoDB

### Database:
- **MongoDB Atlas** (remote cloud DB)

### Tools:
- **VS Code**
- **Postman** for API testing
- **Nodemon** for live backend reloading
- **Concurrently** for parallel server-client development

---

## 🔧 How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/echowalk.git
   cd echowalk
   ```
2. **Install dependencies**
   ```bash  
   npm install
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```
3. **Set up Environmental Variables**
Inside the `server` directory, create a `.env` file and add the following variables:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. **Run the application**
   ```bash
   npm run dev
   ```
   Client will run on http://localhost:5173

   Server will run on http://localhost:5000


## 📌 Goals of EchoWalk
 - Provide precise indoor location assistance
 - Track and navigate buildings using digital markers
 - Offer voice feedback (in later versions)
 - Help visually impaired or unfamiliar users navigate complex spaces

## 🤝 Contributions & Roadmap
This is a personal/academic project, currently being built solo. Future improvements and feature additions will be tracked under GitHub issues.

## 📩 Contact
If you want to collaborate or discuss the project, feel free to reach out!

 - 👤 Dhruv Kumar Tiwari
 - 📧 Email - (tiwaridhruv4146@gmail.com)
 - 🔗 [LinkedIn](https://www.linkedin.com/in/dhruv-kumar-tiwari-359a431aa/)
