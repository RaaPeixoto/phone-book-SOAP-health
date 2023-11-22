import express from "express";
import cors from "cors";

import contactsRouter from "./routers/contactsRouter";

const app = express();
app.use(cors());
app.use(express.json());

 app.use(contactsRouter); 


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port: ${port}`));