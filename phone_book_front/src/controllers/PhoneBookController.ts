import { Contact } from "../interfaces/Contact";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getAllContacts, postContact, putContact,deleteContact } from "../services/ContactsServices";
import {  showError, showSuccess } from "../utils/showToastfyMessages";
import Swal from "sweetalert2";

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
  showConfirmBox:(contact:Contact)=>void;
  filterContacts: string;
  setFilterContacts:(prop: string) => void;
}
function usePhoneBookController(): PhoneBookController {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshContacts, setRefreshContacts] = useState(false);
  const [filterContacts,setFilterContacts] = useState('');
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
  }, [isModalOpen,refreshContacts]);
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

  function showConfirmBox(contact:Contact):void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure you want to delete the contact?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteContact(contact)
          showSuccess("Contact deleted successfully")
          setRefreshContacts(!refreshContacts);
        } catch (err) {
          showError("Error deleting contact!");
          console.error(err);
        }
      
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
  
      }
    });
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
    openEditContactModal,
    showConfirmBox,filterContacts,setFilterContacts
  };
}
export default usePhoneBookController;
