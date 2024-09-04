import React from "react";
import { ListWrap } from "./ContactList.styled";

function ContactList({ contacts }) {
    return (
        contacts.map((obj) => {
            return (<div key={1}>
                <p>{obj.name}</p>
                <p>{obj.phone}</p>
            </div>)
        })
    );
}

export default ContactList