import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './ContactStyles.module.css';

function Contact() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: true,
    });

    sr.reveal(`.${styles.sectionTitle}`, { origin: 'top' });
    sr.reveal(`.${styles.formGroup}`, { origin: 'bottom', interval: 200 });
    sr.reveal(`.${styles.btn}`, { origin: 'bottom', delay: 600 });
  }, []);
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/mwpejkwj" method='post'>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
