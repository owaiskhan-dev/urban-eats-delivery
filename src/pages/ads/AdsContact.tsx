import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AdsContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: 'Our team will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', company: '', phone: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Ads Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our advertising specialists to discuss your marketing goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-main py-16">
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
                    placeholder="John Doe"
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
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="input-search"
                    placeholder="Your Restaurant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-search"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Monthly Budget *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="input-search"
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-search resize-none"
                  placeholder="Tell us about your advertising goals..."
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
            <h2 className="section-title mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">ads@urbaneats.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">1-800-URBAN-ADS</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Food Street, Suite 500</p>
                    <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="mt-8 bg-muted/50 p-6 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">Have Questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check our FAQ section for quick answers to common questions about advertising.
              </p>
              <Button variant="outline" size="sm">View FAQ</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdsContact;
