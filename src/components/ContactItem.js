import React, {useState} from 'react'

function ContactItem(props) {
    const [name, setName] = useState(props.item.name);
    const [surname, setSurname] = useState(props.item.surname);
    const [number, setNumber] = useState(props.item.number);
    const [isEdit, setEdit] = useState(false);
    const classList = ["contact-list__item"];
    if(props.item.status){
        classList.push("checked");
    }

    const handleEdit = (e) => {
        e.stopPropagation();
        setEdit(!isEdit);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        props.editContact({
            ...props.item,
            name: name,
            surname: surname,
            number: number
        })
        setEdit(false);
    }

    const handleEditInputName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleEditInputSurname = (e) => {
        setSurname(e.target.value);
        console.log(e.target.value);
    }

    const handleEditInputNumber = (e) => {
        setNumber(e.target.value);
        console.log(e.target.value);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        props.deleteContact(props.item.id)
    }
    
    return (
    <li 
        onClick = {() => props.changeStatus(props.item.id)} 
        className={classList.join(" ")}
    >
        <div>
                {isEdit ? (
                    <form className = "edit-form" onClick = {e => e.stopPropagation()} onSubmit = {handleEditSubmit}>
                        <input 
                            className = "edit-inp__name"
                            value = {name} 
                            onChange = {handleEditInputName} 
                            type = "text" 
                            required
                        />
                        <input 
                            className = "edit-inp__surname"
                            value = {surname} 
                            onChange = {handleEditInputSurname} 
                            type = "text" 
                            required
                        />
                        <input 
                            className = "edit-inp__number"
                            value = {number} 
                            onChange = {handleEditInputNumber} 
                            type = "number" 
                            required
                        />
                        <div>
                            <button className = "edit-form-btn" type="submit">OK</button>
                            <button className = "edit-form-btn" onClick = {() => setEdit(false)} type="reset">Back</button>
                        </div>
                    </form>
                ) : (
                    props.item.name + " " +
                    props.item.surname + ": " +
                    props.item.number
                )}
            </div>
            <div>
                <button onClick={handleEdit} className = "btn-edit contact-item__btn">
                    &#x270E;
                </button>
                <button onClick = {handleDelete} className = "btn-del contact-item__btn">
                    &#x2716;
                </button>
            </div>
    </li>
    )
}

export default ContactItem
