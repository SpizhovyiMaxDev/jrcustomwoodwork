import styles from "./ContactsItem.module.css";

import Heading from "../../ui/Heading/Heading";

function ContactsItem({ contact }) {
  return (
    <li className={styles.contactsListItem}>
      <svg width="28px" height="28px">
        <use xlinkHref={`/icons.svg#icon-${contact.icon}`}></use>
      </svg>

      <div>
        <Heading type="tertiary">{contact.name}</Heading>

        <p className={styles.contact}>{contact.text}</p>
      </div>
    </li>
  );
}

export default ContactsItem;
