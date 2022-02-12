import express, {Application} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app:Application = express();

dotenv.config();

const dbString:string|undefined = process.env.MONGODB_URL;

mongoose.connect(dbString!)
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Failed to connect to db ❌"))

app.use(cors());
app.use(express.json());

// routes
import authRoute from './routes/auth';
import userRoute from './routes/users';
import gameRoute from './routes/games';
import fieldRoute from './routes/fields'

// path declaration of routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)
app.use("/api/games", gameRoute);
app.use("/api/fields", fieldRoute);

// port declaration and execution
const port:string|number =  process.env.PORT || 8000;
app.listen(port, () => {console.log(`Server Started in port ⚡️`)})