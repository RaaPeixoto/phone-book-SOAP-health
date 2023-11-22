import { Request, Response } from "express";
import httpStatus from "http-status";
import { findContacts } from "../repositories/contactsRepository";
import { createContact, removeContact, updateContact } from "../services/contactsService";

export async function getContacts(req: Request, res: Response) {
  try {
    const contacts = await findContacts();

    res.status(httpStatus.OK).send(contacts);
  } catch (err) {
    res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function postContact(req: Request, res: Response) {
  try {
    const { firstName, lastName, phoneNumber } = req.body;
    const newContact = await createContact(firstName, lastName, phoneNumber );

    res.status(httpStatus.OK).send(newContact);
  } catch (err) {
    res.sendStatus(httpStatus.NO_CONTENT);
  }
}
export async function deleteContact(req: Request, res: Response) {
    try {
      const id = req.params.contactId;
      await removeContact(id);
  
      res.status(httpStatus.OK).send("Success!");
    } catch (err) {
      res.sendStatus(httpStatus.NO_CONTENT);
    }
  }

  export async function putContact(req: Request, res: Response) {
    try {
        const {id, firstName, lastName, phoneNumber } = req.body;
      await updateContact(id, firstName, lastName, phoneNumber );
  
      res.status(httpStatus.OK).send("Success!");
    } catch (err) {
      res.sendStatus(httpStatus.NO_CONTENT);
    }
  }