import React, {Component} from 'react'

export class ContactBookForm extends Component{

    state = {
        textName: "",
        textSurname: "",
        textNumber: "",
    }

    addContact = (e) => {
        e.preventDefault();
        const contact = {
            id: Date.now(),
            name: this.state.textName,
            surname: this.state.textSurname,
            number: this.state.textNumber,
            status: false        
        };
        this.props.onSubmit(contact);  
        this.setState({
            textName: "",
            textSurname: "",
            textNumber: ""
        })
    }

    handleInputName = (e) => {
        const text = e.target.value;
        this.setState({
            textName: text
        });
    }

    handleInputSurname = (e) => {
        const text = e.target.value;
        this.setState({
            textSurname: text
        });
    }

    handleInputNumber = (e) => {
        const text = e.target.value;
        this.setState({
            textNumber: text
        });
    }

    render(){
        return(
            <div>
                <form className="contact-form" onSubmit={this.addContact}>
                    <h1>Contact Book</h1>
                    <h3>React</h3>
                    <input 
                        type="text" 
                        className="contact-input name" 
                        placeholder="Add contact name..."
                        onChange={this.handleInputName}
                        value={this.state.textName}
                        required
                    />
                    <input 
                        type="text" 
                        className="contact-input surname" 
                        placeholder="Add contact surname..."
                        onChange={this.handleInputSurname}
                        value={this.state.textSurname}
                        required
                    />     
                    <input 
                        type="number" 
                        className="contact-input number" 
                        placeholder="Add contact number..."
                        onChange={this.handleInputNumber}
                        value={this.state.textNumber}
                        required
                    />  
                    <button 
                        className="add-button"             
                        type="submit" 
                    >Add
                    </button>      
                </form>
            </div>
        )
    }
}

export default ContactBookForm;