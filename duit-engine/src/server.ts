import express, { Express, Request, Response } from "express";
import { Server } from "http";
import userRouter from "@routes/authRoutes";
import { errorConverter, errorHandler } from "./middleware";
import { connectDB } from "./database";
import config from "@config/config";
import cors from 'cors';

const app: Express = express();
const corsOptions = {
    origin: 'http://localhost:5173', // Allow only requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
  };
app.use(cors(corsOptions));
app.get('/register', (req: Request, res: Response) => {
    res.send('CORS-enabled Express app!');
});
app.get('/login', (req: Request, res: Response) => {
    res.send('CORS-enabled Express app!');
});

let server: Server;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(errorConverter);
app.use(errorHandler);

connectDB();

server = app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info("Server closed");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);