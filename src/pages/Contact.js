function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>If you’d like to work with me or connect, feel free to reach out:</p>

      <div className="contact-buttons">
        <button onClick={() => window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=Gerswin.ravelo@urios.edu.ph&su=Hello&body=Hi,%20I%20would%20like%20to%20connect",
      "_blank"
    )
  }
>
          Email: Gerswin.ravelo@urios.edu.ph
        </button>

        <button onClick={() => window.open("https://github.com/WarzZski", "_blank")}>
          GitHub: WarzZski
        </button>

      </div>
    </section>
  );
}

export default Contact;
