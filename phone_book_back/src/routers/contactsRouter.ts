import { deleteContact, getContacts, postContact, putContact } from "../controllers/contactsController";
import { Router } from "express";
import{verifyNewUserSchema,verifyEditUserSchema} from "../middlewares/contactsMiddleware"




const contactsRouter = Router();

contactsRouter.get("/contacts",getContacts);
contactsRouter.post("/contact",verifyNewUserSchema,postContact);
contactsRouter.delete("/contact/:contactId",deleteContact);
contactsRouter.put("/contact/",verifyEditUserSchema,putContact);
export default contactsRouter;