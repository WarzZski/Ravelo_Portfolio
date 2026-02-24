
function Contact() {
  // Gmail form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const description = e.target.description.value;
    // Compose Gmail URL
    const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(description)}`;
    window.open(mailUrl, '_blank');
  };

  return (
    <section className="contact modern-contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">If you’d like to work with me or connect, feel free to reach out:</p>
      <form className="gmail-form" onSubmit={handleSubmit} style={{marginBottom: '32px'}}>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="email" style={{display: 'block', marginBottom: '6px'}}>Gmail:</label>
          <input type="email" id="email" name="email" defaultValue="Gerswin.ravelo@urios.edu.ph" required style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="subject" style={{display: 'block', marginBottom: '6px'}}>Subject:</label>
          <input type="text" id="subject" name="subject" required style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="description" style={{display: 'block', marginBottom: '6px'}}>Description:</label>
          <textarea id="description" name="description" required rows={4} style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
        </div>
        <button type="submit" className="contact-btn" style={{marginTop: '8px'}}>Send to Gmail</button>
      </form>
      <div className="contact-buttons">
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
