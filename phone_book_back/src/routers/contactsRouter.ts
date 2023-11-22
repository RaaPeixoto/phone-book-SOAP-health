import { deleteContact, getContacts, postContact, putContact } from "../controllers/contactsController";
import { Router } from "express";





const contactsRouter = Router();

contactsRouter.get("/contacts",getContacts);
contactsRouter.post("/contact",postContact);
contactsRouter.delete("/contact/:contactId",deleteContact);
contactsRouter.put("/contact/",putContact);
export default contactsRouter;