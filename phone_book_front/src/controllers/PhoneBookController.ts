import { Contact } from "../interfaces/Contact";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getAllContacts, postContact, putContact } from "../services/ContactsServices";
import { showError, showSuccess } from "../utils/showToastfyMessages";
interface PhoneBookController {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  isModalOpen: boolean;
  setIsModalOpen: (prop: boolean) => void;
  form: Contact;
  handleForm: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddContact: (e: FormEvent<HTMLFormElement>) => void;
  handleEditContact: (e: FormEvent<HTMLFormElement>) => void;
  closeModal: () => void;
  isEditModal:boolean;
  openEditContactModal: (contact:Contact) => void;
}
function usePhoneBookController(): PhoneBookController {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllContacts();
        setContacts(response);
      } catch (err) {
        showError("Error fetching contacts");
        console.error(err);
      }
    };

    fetchData();
  }, [isModalOpen]);
  const addContact = async (contact: Contact): Promise<void> => {
    await postContact(contact);

  };

  function closeModal() {
    setIsEditModal(false);
    setIsModalOpen(false);
    setForm({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
  }
  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }
  async function handleAddContact(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      await addContact(form);
      closeModal() 
      showSuccess("Success adding contact!")
    } catch (err) {
      showError("Error when adding contact");
      console.error(err);
    }
  }
  async function handleEditContact(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      await putContact(form);
      closeModal() 
      showSuccess("Success editing contact!")
    } catch (err) {
      showError("Error when editing contact");
      console.error(err);
    }
  }
  function openEditContactModal(contact:Contact) {
    setForm(contact);
    setIsEditModal(true);
    setIsModalOpen(true);
  }
  return {
    contacts,
    addContact,
    isModalOpen,
    setIsModalOpen,
    form,
    handleForm,
    handleAddContact,
    handleEditContact,
    closeModal,
    isEditModal,
    openEditContactModal
  };
}
export default usePhoneBookController;
