import usePhoneBookController from "../controllers/PhoneBookController";
import { Contact } from "../interfaces/Contact";
import ContactModal from "./ContactModal";
import {
  PageContainer,
  PhoneBookIcon,
  TitleContainer,
  AddContactContainer,
  ContentContainer,
  ContactLi,
  ContactsUl,
  ContactFullName,
  ContactInfos,
  PhoneIcon,
  ContactPhoneNumber,
  Searchbar,
  SearchIcon,
  SearchInput,
  TrashButton,
  TrashIcon,
} from "../assets/styles/phoneBookStyle";

export default function PhoneBook(): JSX.Element {
  const {
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
    showConfirmBox,
    filterContacts,
    setFilterContacts,
  } = usePhoneBookController();

  return (
    <PageContainer>
      <TitleContainer>
        <PhoneBookIcon />
        <h2>Phone Book App</h2>
      </TitleContainer>

      <ContentContainer>
        <AddContactContainer>
          <h3>Contacts</h3>
          <button onClick={() => setIsModalOpen(true)}>+ Add Contact</button>
        </AddContactContainer>

        {isModalOpen && (
          <ContactModal
            isEditModal={isEditModal}
            form={form}
            closeModal={closeModal}
            handleForm={handleForm}
            handleAddContact={handleAddContact}
            handleEditContact={handleEditContact}
          />
        )}
        <Searchbar>
          <SearchIcon />
          <SearchInput
            value={filterContacts}
            onChange={(e) => setFilterContacts(e.target.value)}
            type="text"
            placeholder="Search for contact by last name..."
          />
        </Searchbar>
        <ContactsUl>
          {contacts.map((contact: Contact, index: number) => (
             contact.lastName.toLowerCase().includes(filterContacts.toLowerCase()) &&
            <ContactLi key={contact.id}>
              <ContactInfos onClick={() => openEditContactModal(contact)}>
                <ContactFullName>
                  {contact.firstName} {contact.lastName}
                </ContactFullName>
                <ContactPhoneNumber>
                  <PhoneIcon />
                  {contact.phoneNumber}
                </ContactPhoneNumber>
              </ContactInfos>
              <TrashButton onClick={() => showConfirmBox(contact)}>
                <TrashIcon />
              </TrashButton>
            </ContactLi>
          ))}
        </ContactsUl>
      </ContentContainer>
    </PageContainer>
  );
}
