import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, value, link, copyable = false }: { icon: React.ComponentType; title: string; value: string; link?: string; copyable?: boolean }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div 
      className="flex gap-4 items-start p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
      whileHover={{ y: -5 }}
    >
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
      {copyable && (
        <button 
          onClick={handleCopy}
          className="text-xs px-2 py-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label={`Copy ${title}`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      )}
    </motion.div>
  );
};

const SocialLink = ({ icon: Icon, href, label }: { icon: React.ComponentType; href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-card p-3 rounded-full hover:bg-primary/10 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon />
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = {
    success: boolean;
    message: string;
  };
  
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulating form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully."
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out to me directly or use the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              value="rwpatrick001@gmail.com" 
              link="mailto:rwpatrick001@gmail.com"
              copyable
            />
            
            <ContactInfo 
              icon={Phone} 
              title="Phone" 
              value="+(250) 783 992 155" 
              link="tel:+250783992155"
              copyable
            />
            
            <ContactInfo 
              icon={MapPin} 
              title="Location" 
              value="Kigali City, Rwanda"
            />

            <div className="pt-4">
              <h3 className="text-xl font-medium mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <SocialLink 
                  icon={Github} 
                  href="https://github.com/p-rwirangira" 
                  label="GitHub Profile"
                />
                <SocialLink 
                  icon={Linkedin} 
                  href="https://linkedin.com/in/yourusername" 
                  label="LinkedIn Profile"
                />
                <SocialLink 
                  icon={Twitter} 
                  href="https://twitter.com/PRwirangira" 
                  label="Twitter Profile"
                />
              </div>
            </div>
            
            <div className="p-4 bg-secondary/20 rounded-lg mt-6">
              <p className="text-sm text-muted-foreground">
                Typically, I respond to inquiries within 24 hours. For urgent matters, 
                please reach out via phone.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-card p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-primary font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-primary font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-primary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all h-32 resize-none"
                  placeholder="Tell me about your project or inquiry"
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;