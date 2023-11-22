
import axios from "axios"
import { BASE_URL } from "../constants/url"
import { Contact } from "../interfaces/Contact"
export async function getAllContacts(): Promise<Contact[]> {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      throw error; 
    }
  }

  export async function postContact(contact:Contact): Promise<Contact> {
    try {
      const response = await axios.post(`${BASE_URL}/contact`,contact);
      return response.data;
    } catch (error) {
      throw error; 
    }
  }

  export async function putContact(contact:Contact): Promise<Contact> {
    try {
      const response = await axios.put(`${BASE_URL}/contact`,contact);
      return response.data;
    } catch (error) {
      throw error; 
    }
  }


  export async function deleteContact(id:string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/contact/${id}`);
  
    } catch (error) {
      throw error; 
    }
  }

  