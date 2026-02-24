
function Contact() {
  // Gmail form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const sender = e.target.email.value;
    const subject = e.target.subject.value;
    const description = e.target.description.value;

    // POST to serverless endpoint which will send the email (requires server SMTP env vars)
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender, subject, description }),
    })
      .then((r) => {
        if (!r.ok) throw new Error('send failed');
        alert('Message sent — thank you!');
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to send message. Please try again or email gerswin.ravelo@urios.edu.ph directly.');
      });
  };

  return (
    <section className="contact modern-contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">If you’d like to work with me or connect, feel free to reach out:</p>
      <form className="gmail-form" onSubmit={handleSubmit} style={{marginBottom: '32px'}}>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="email" style={{display: 'block', marginBottom: '6px'}}>Gmail:</label>
          <input type="email" id="email" name="email" defaultValue="" required placeholder="you@example.com" style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="subject" style={{display: 'block', marginBottom: '6px'}}>Subject:</label>
          <input type="text" id="subject" name="subject" required style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="description" style={{display: 'block', marginBottom: '6px'}}>Description:</label>
          <textarea id="description" name="description" required rows={4} style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
        </div>
        <button type="submit" className="contact-btn" style={{marginTop: '8px'}}>Send Message</button>
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
