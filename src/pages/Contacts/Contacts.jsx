import styles from "./Contacts.module.css";

import ContactsItem from "./ContactsItem";

import { contacts } from "../../data/contacts";

function Contacts() {
  console.log(contacts);
  return (
    <section className={styles.contacts}>
      <div className="container">
        <div className={`${styles.mapWrapper} mb-4`}>
          <iframe
            className={styles.map}
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82238.53416721537!2d-119.53717879343728!3d49.89966330685688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c730b3%3A0x4ef8e53ddab4c4f7!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1721083593651!5m2!1sen!2sca"
            }
            loading="lazy"
            title="map"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <ul className={styles.contactsList}>
          {contacts.map((contact) => (
            <ContactsItem contact={contact} key={contact.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
