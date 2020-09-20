import React from 'react'
import ContactItem from './ContactItem'

function ContactList(props) {
    return (
        <div>
            <ul className="contact-list">
                {props.data.map(item => (
                    <ContactItem 
                        key = {item.id + "-list-item"} 
                        item = {item}
                        changeStatus = {props.changeStatus}
                        editContact = {props.editContact}
                        deleteContact = {props.deleteContact}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ContactList