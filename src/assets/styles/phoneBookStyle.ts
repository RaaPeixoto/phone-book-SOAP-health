import { styled } from "styled-components";
import { FaAddressBook, FaPhoneAlt,FaSearch,FaTrashAlt } from "react-icons/fa";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #f6f6f6;
`;
const PhoneBookIcon = styled(FaAddressBook)`
  font-size: 40px;
  margin-right: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  h2 {
    font-size: 45px;
    font-weight: 500;
  }
`;
const Searchbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  width: 100%;
  background-color: #ffffff;
  margin-top: 20px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  color: #73797f;
  margin-right: 7px;
`;

const SearchInput = styled.input`
  width: 100%;
  color: #73797f;
  font-size: 16px;
  font-weight: 500;
  border:none;
  &:focus-visible{
    outline:none;
  }
`;
const AddContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  h3 {
    font-size: 30px;
    font-weight: 500;
  }
  button {
    border: none;
    background-color: #347bf6;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

const ContactLi = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
  border-left: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 1px solid #dfdfdf;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ContactsUl = styled.ul`
  margin-top: 30px;
  max-height:60vh;
  overflow-y:scroll;
  padding:10px 0;
`;
const ContactFullName = styled.h3`
  font-size: 26px;
  font-weight: 500;
`;
const ContactPhoneNumber = styled.p`
  color: #a6a6a6;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const ContactInfos = styled.div`
cursor:pointer;
width:100%;
`;

const PhoneIcon = styled(FaPhoneAlt)`
  color: #a6a6a6;
  font-size: 15px;
  margin-right: 7px;
`;
const TrashButton = styled.button`
border:none;
padding:15px;
background-color:#cb444a;
display:flex;
align-items:center;
border-radius:5px;
cursor:pointer;
`
const TrashIcon  = styled(FaTrashAlt)`
color:#FFFFFF;
font-size:20px;
`
export {
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
  TrashIcon
};
