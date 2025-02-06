import express from 'express';
import "dotenv/config";
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';
import morgan from 'morgan';
import { Server } from 'socket.io';
import { User } from './models/userModel';
import jwt from 'jsonwebtoken';


const app = express();
const server = http.createServer(app);
const {PORT} = process.env || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

mongoose.connect(process.env.MONGO_URL!);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
  socket.on("private message", async (to, message, mySelf) => {
    const user = await User.find({email: to});
    const decoded = jwt.verify(mySelf, process.env.ACCESS_TOKEN_SECRET!);
    const sender = await User.findById(decoded);
    io.sockets.emit("refresh", "new Message");

    if (user){
      user[0].messages.push({
        reciver: user[0].email,
        message,
        sender: sender?.email,
        time: new Date()
      })
      sender?.messages.push({
        reciver: user[0].email,
        message,
        sender: sender?.email,
        time: new Date()
      })
      await user[0].save();
      await sender?.save();
    }
  })
})

app.use("/", userRouter);