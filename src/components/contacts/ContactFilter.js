import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const { filtered, filterContacts, clearFilter } = useContext(ContactContext);

  const text = useRef("");

  useEffect(() => {
    if (!filtered) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    e.preventDefault();
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
