
function Contact() {
  return (
    <section className="contact modern-contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">If you’d like to work with me or connect, feel free to reach out:</p>
      <div className="contact-buttons">
        <button
          className="contact-btn"
          onClick={() => window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=Gerswin.ravelo@urios.edu.ph&su=Hello&body=Hi,%20I%20would%20like%20to%20connect",
            "_blank"
          )}
        >
          <span className="contact-icon">✉️</span> Email: Gerswin.ravelo@urios.edu.ph
        </button>
        <button
          className="contact-btn"
          onClick={() => window.open("https://github.com/WarzZski", "_blank")}
        >
          <span className="contact-icon">🐙</span> GitHub: WarzZski
        </button>
      </div>
    </section>
  );
}

export default Contact;
