import express, {Application} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app:Application = express();

dotenv.config();

mongoose.connect('mongodb://localhost/soccerapp')
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Failed to connect to db ❌"))

app.use(cors());
app.use(express.json());

// routes
import userRoute from './routes/users';
import gameRoute from './routes/games';
import fieldRoute from './routes/fields'

// path declaration of routes
app.use("/api/auth", userRoute);
app.use("/api/games", gameRoute);
app.use("/api/fields", fieldRoute);

// port declaration and execution
const port:number =  8000;
app.listen(port, 'localhost', () => {console.log(`Server Started in port ⚡️`)})