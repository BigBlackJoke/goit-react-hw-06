import css from "./Contact.module.css";

export default function Contact({ contact, deleteContact }) {
    const deleteUser = () => {deleteContact(contact.id)}
    return (
        <div className={css.container}>
            <div className={css.usercontainer}> 
                <p>{contact.name}</p>
                <p>{contact.number}</p>
            </div>
            <button className={css.deletebutton} onClick={deleteUser}>Delete</button>
        </div>
    )
}