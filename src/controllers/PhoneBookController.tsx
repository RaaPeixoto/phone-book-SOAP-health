import { useState } from 'react';

export interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface PhoneBookController {
  contacts: Contact[];
  addContact: (contact: Contact) => void;

}


const usePhoneBookController = (): PhoneBookController => {
  const [contacts, setContacts] = useState<Contact[]>([{ firstName: "string",
    lastName: "string",
    phoneNumber: "string",},{ firstName: "string",
    lastName: "string",
    phoneNumber: "string",}]);

  const addContact = (contact: Contact): void => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  return { contacts, addContact};
};

export default usePhoneBookController;