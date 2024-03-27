import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.Contactsection} id="contact">
      <div className={styles.formheading}>
        <h1>Contact</h1>
      </div>
      <div className={styles.border}></div>
      <div>
        <form
          className={styles.formContainer}
          action="mailto:varunwali36@gmail.com"
          method="post"
          enctype="text/plain">
          <div className={styles.forminput}>
            <input type="name" name="Name" placeholder="varun" required></input>
          </div>
          <div className={styles.forminput}>
            <input
              type="email"
              name="Email"
              placeholder="varun@gmail.com"
              required></input>
          </div>
          <div className={styles.forminput}>
            <input
              type="tel"
              name="Phone"
              placeholder="9876543219"
              required></input>
          </div>
          <textarea
            name="message"
            rows={5}
            cols={20}
            placeholder="Message..."></textarea>
          <input className={styles.submit} type="submit" value="Submit"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
