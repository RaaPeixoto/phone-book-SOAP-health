


import { Contact } from "../models/contactModel";

export let contacts = [{ id: "321", firstName: "Raísa", lastName: "Cadete", phoneNumber: "+55 31 99172-3724" }];


export async function findContacts(): Promise<Contact[]> {
 return contacts
  }


export async function createNewContact(contact:Contact):Promise<Contact> {
    contacts.push(contact)
return contact
     }

     export async function deleteContactById(id:string): Promise<void>{
        contacts = contacts.filter((c)=>{return c.id !== id})

         }

         export async function updateContactDb(contact:Contact): Promise<void>{
            contacts = contacts.map((c)=>{
                if(c.id === contact.id){
                    return contact
                }else{
                    return c
                }
            }
            )
    
             }