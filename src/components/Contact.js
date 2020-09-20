import React from 'react'
import ContactBookForm from './ContactBookForm';
import ContactList from './ContactList';


class Contact extends React.Component{
    state = {
        contacts: [
            {
                id: 0,
                name: "Zhaina",
                surname: "Bakytova",
                number: "00999888",
                status: false
            },
            {
                id: 1,
                name: "Nurzat",
                surname: "Zheembaeva",
                number: "00999888",
                status: false
            }
        ]
    }

    handleChangeStatus = (id) => {
        const index = this.state.contacts.findIndex(item => item.id === id);
        const contacts = [...this.state.contacts];
        const item = {...contacts[index]};
        item.status = !item.status;
        contacts[index] = item;
        this.setState({contacts});
    }

    handleAddContact = (contact) => {
        const contacts = [...this.state.contacts];
        contacts.push(contact);
        this.setState({contacts});
    }

    handleEditContact = ({id, name, surname, number}) => {
        const index = this.state.contacts.findIndex(item => item.id === id);
        const contacts = [...this.state.contacts];
        const item = {...contacts[index]};
        item.name = name;
        item.surname = surname;
        item.number = number;
        contacts[index] = item;
        this.setState({contacts});
    }

    handleDeleteContact = (id) => {
        const contacts = this.state.contacts.filter((item) => {
            return item.id !== id; 
        });
        this.setState({contacts});
    }

    render(){
        return(
            <div className="contact">
                <ContactBookForm onSubmit={this.handleAddContact}/>
                <ContactList
                    data={this.state.contacts}
                    changeStatus = {this.handleChangeStatus}
                    editContact = {this.handleEditContact}
                    deleteContact = {this.handleDeleteContact}
                />
            </div>
        );
    }
}

export default Contact;