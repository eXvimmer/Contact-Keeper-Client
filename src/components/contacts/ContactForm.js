import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    type: "personal",
  };
  const { addContact } = useContext(ContactContext);
  const [contact, setContact] = useState(initialState);

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        id="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      <label htmlFor="personal"> Personal </label>
      <input
        type="radio"
        name="type"
        value="professional"
        id="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      <label htmlFor="professional"> Professional </label>
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
