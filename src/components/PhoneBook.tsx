import React, { ChangeEvent, useState } from 'react';
import usePhoneBookController, { Contact } from '../controllers/PhoneBookController';
import {PageContainer,
  PhoneBookIcon,
  TitleContainer,
  AddContactContainer,
  ContentContainer,
  ContactLi,
  ContactsUl,ContactFullName,ContactInfos,PhoneIcon,ContactPhoneNumber,Searchbar,SearchIcon,SearchInput,  
  TrashButton,
  TrashIcon} from "../assets/styles/phoneBookStyle";
interface PhoneBookProps {
  controller: ReturnType<typeof usePhoneBookController>;
}

const PhoneBook: React.FC<PhoneBookProps> = ({ controller }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form,setForm] =useState({
    firstName:'',
    lastName:'',
    phoneNumber:''
  })

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form)
  
  }
  const handleAddContact = () => {
    controller.addContact(form);
    setIsModalOpen(false);
    setForm({
      firstName:'',
      lastName:'',
      phoneNumber:''
    })
  };

  return (
    <PageContainer>
  
        <TitleContainer>
          <PhoneBookIcon/>
          <h2>Phone Book App</h2>
        </TitleContainer>

        <ContentContainer>
        <AddContactContainer>
          <h3>Contacts</h3>
          <button onClick={() => setIsModalOpen(true)}>+ Add Contact</button>
        </AddContactContainer>


      {/* Modal para adicionar contatos */}
    {/*   {isModalOpen && (
        <div>
          <h3>Add Contact</h3>
          <label>
            First Name:
            <input type="text" name="firstName" value={form.firstName} onChange={(e) => handleForm(e)} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={form.lastName} onChange={(e) => handleForm(e)} />
          </label>
          <label>
            Number:
            <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={(e) => handleForm(e)} />
          </label>
          <button onClick={handleAddContact}>Add Contact</button>
        </div>
      )} */}

      {/* Lista de contatos */}
      <Searchbar> 
        <SearchIcon/>
        <SearchInput placeholder="Search for contact by last name..."/>
      </Searchbar>
      <ContactsUl>
  {controller.contacts.map((contact: Contact, index: number) => (
    <ContactLi key={index}>
      <ContactInfos> 
      <ContactFullName>{contact.firstName} {contact.lastName} </ContactFullName>
 <ContactPhoneNumber> <PhoneIcon/>{contact.phoneNumber}</ContactPhoneNumber>
   </ContactInfos>
<TrashButton>
  <TrashIcon/>
</TrashButton>
      </ContactLi>
  ))}
</ContactsUl>
</ContentContainer>
    </PageContainer>
  );
};

export default PhoneBook;

