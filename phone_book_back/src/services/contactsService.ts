import { Contact } from 'models/contactModel';
import { createNewContact, deleteContactById, updateContactDb } from '../repositories/contactsRepository';
import { v4 as uuidv4 } from 'uuid';

export async function createContact(firstName:string,lastName:string,phoneNumber:string):Promise<Contact>{
    const id = uuidv4();
    const newContact = createNewContact( {id,firstName,lastName,phoneNumber})

return newContact
}

export async function removeContact(id:string){
        await deleteContactById(id)
}
export async function updateContact(id:string,firstName:string,lastName:string,phoneNumber:string){
    await updateContactDb( {id,firstName,lastName,phoneNumber})
}