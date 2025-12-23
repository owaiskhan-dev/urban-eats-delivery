import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, ShoppingBag, CreditCard, Truck, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories = [
    { icon: ShoppingBag, title: 'Orders', description: 'Track, modify, or cancel orders' },
    { icon: CreditCard, title: 'Payments', description: 'Payment methods and refunds' },
    { icon: Truck, title: 'Delivery', description: 'Delivery times and issues' },
    { icon: User, title: 'Account', description: 'Profile and settings' },
    { icon: HelpCircle, title: 'General', description: 'FAQs and other questions' },
    { icon: MessageCircle, title: 'Contact', description: 'Get in touch with us' },
  ];

  const faqs = [
    {
      id: '1',
      question: 'How do I track my order?',
      answer: 'You can track your order in real-time through the UrbanEats app or website. Go to "My Orders" and select your active order to see live tracking with the delivery rider\'s location.',
    },
    {
      id: '2',
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and cash on delivery in select areas.',
    },
    {
      id: '3',
      question: 'How do I cancel an order?',
      answer: 'You can cancel an order within 2 minutes of placing it through the app. After that, please contact our support team for assistance. Cancellation fees may apply if the restaurant has already started preparing your food.',
    },
    {
      id: '4',
      question: 'What if my order is late?',
      answer: 'If your order is significantly delayed, you may be eligible for a refund or credit. Contact our support team through the app, and we\'ll resolve the issue promptly.',
    },
    {
      id: '5',
      question: 'How do I report a problem with my order?',
      answer: 'Go to your order history, select the relevant order, and tap "Report an Issue". You can report missing items, incorrect orders, or food quality concerns. Our team will review and respond within 24 hours.',
    },
    {
      id: '6',
      question: 'Can I schedule an order in advance?',
      answer: 'Yes! You can schedule orders up to 7 days in advance. During checkout, select "Schedule for later" and choose your preferred delivery date and time.',
    },
    {
      id: '7',
      question: 'How do promo codes work?',
      answer: 'Enter your promo code at checkout in the "Promo Code" field. Discounts will be applied to eligible items. Note that some codes have minimum order requirements or are valid only for specific restaurants.',
    },
    {
      id: '8',
      question: 'Is there a minimum order amount?',
      answer: 'Minimum order amounts vary by restaurant. The minimum is displayed on each restaurant\'s page. Orders below the minimum may incur a small order fee.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How can we help?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search our help center or browse categories below to find answers to your questions.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-search pl-12"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-main py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <button
              key={category.title}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-left animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => toast.info(`${category.title} section coming soon!`)}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <h2 className="section-title text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-card rounded-xl shadow-card overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6 text-muted-foreground animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No results found for "{searchQuery}"</p>
              <Button onClick={() => setSearchQuery('')} variant="outline">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-main py-16">
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-lg opacity-90 mb-8">
            Our support team is available 24/7 to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              onClick={() => toast.info('Live chat coming soon!')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
