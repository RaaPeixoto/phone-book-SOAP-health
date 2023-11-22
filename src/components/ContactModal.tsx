import { ChangeEvent, FormEvent } from "react";
import {
    ModalPageContainer,
    ModalContainer,
    Form,
    CloseIcon,
    ButtonsContainer,
  } from "../assets/styles/contactModalStyle";
import { Contact } from "../interfaces/Contact";
  interface ContactModalProps {
    form: Contact;
    handleForm: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAddContact:(e:FormEvent<HTMLFormElement>)=>void;
    handleEditContact:(e:FormEvent<HTMLFormElement>)=>void;
    closeModal:()=>void;
    isEditModal:boolean;
  }
  export default function ContactModal({
  
    form,
    handleForm,
    handleAddContact,
    handleEditContact,
    closeModal,
    isEditModal

  }: ContactModalProps) {
    console.log(form)
    return (
      <ModalPageContainer>
        <ModalContainer>
          <CloseIcon onClick={closeModal} />
          {isEditModal ? <h4>Edit Contact</h4> : <h4>New Contact</h4>}
          <Form  onSubmit={isEditModal ? handleEditContact:handleAddContact}>
            <div>
              <p>
                First Name:
              </p>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleForm}
                required
                
              />
            </div>
            <div>
              <p>
                Last Name:
              </p>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleForm}
                type="text"
                required
          
              />
            </div>
            <div>
              <p>
                Phone Number: 
              </p>
  
              <input
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleForm}
                type="text"
                required
       
              />
            </div>
        
            <ButtonsContainer>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </ButtonsContainer>
          </Form>
        </ModalContainer>
      </ModalPageContainer>
    );
  }
  