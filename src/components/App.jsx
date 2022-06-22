
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";
import { useSelector } from "react-redux";



export default function App() {
  const items =  useSelector(state=>state.contacts.items);
  return (
    <div className={s.container}>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm />


        {items.length >0 && <><h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList/></>}

    </div>
    
)

  
 }