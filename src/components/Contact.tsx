const Contact = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-lg mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-primary mb-2">Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-primary mb-2">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-primary mb-2">Message</label>
            <textarea
              className="input-field h-32 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;