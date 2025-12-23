import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: 'We\'ll get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
    },
    {
      icon: HelpCircle,
      title: 'Help Center',
      description: 'Browse our FAQ and help articles',
      action: 'Visit Help Center',
    },
    {
      icon: FileText,
      title: 'Order Issues',
      description: 'Report problems with your order',
      action: 'Report Issue',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team is here to help.
          </p>
        </div>
      </section>

      {/* Quick Support Options */}
      <section className="container-main py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <button
              key={option.title}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-left animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toast.info(`${option.title} coming soon!`)}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
              <span className="text-sm font-medium text-primary">{option.action} →</span>
            </button>
          ))}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container-main py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-fade-in">
            <h2 className="section-title mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-search"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-search"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-search"
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Issue</option>
                  <option value="account">Account Help</option>
                  <option value="partner">Partnership Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-search resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-primary shadow-button">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="section-title mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                    <p className="text-muted-foreground">support@urbaneats.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Support</h3>
                    <p className="text-muted-foreground">1-800-URBAN-EATS</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">123 Food Street</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-muted h-48 rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground">📍 Map Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'How do I track my order?', a: 'You can track your order in real-time through the UrbanEats app or website. Just go to "My Orders" to see the live status.' },
              { q: 'What is the delivery fee?', a: 'Delivery fees vary by restaurant and distance. The fee is always displayed before you checkout.' },
              { q: 'How do I report a problem with my order?', a: 'Go to your order history, select the order, and tap "Report an Issue". Our team will assist you promptly.' },
              { q: 'Can I schedule an order in advance?', a: 'Yes! You can schedule orders up to 7 days in advance. Just select your preferred delivery time at checkout.' },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
