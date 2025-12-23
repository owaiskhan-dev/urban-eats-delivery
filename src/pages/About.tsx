import { Users, Leaf, Clock, Award, Heart, Truck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our customers in every decision we make, ensuring the best food delivery experience.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices, from packaging to delivery fleet.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local restaurants and creating jobs in communities we serve.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Partnering only with restaurants that meet our high-quality standards.',
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Fast, reliable delivery without compromising food quality.',
    },
    {
      icon: Truck,
      title: 'Reliability',
      description: 'You can count on us for consistent, on-time deliveries every time.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">UrbanEats</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to transform the way people experience food delivery. 
              Fresh, fast, and always delicious – that's the UrbanEats promise.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container-main py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, UrbanEats started with a simple idea: everyone deserves access to 
                delicious, high-quality food delivered right to their door. What began as a small 
                startup has grown into a platform serving millions of customers across the country.
              </p>
              <p>
                Our founders, passionate food lovers themselves, saw an opportunity to connect 
                local restaurants with hungry customers in a way that benefits everyone. We work 
                closely with restaurant partners to ensure that every meal arrives fresh and exactly 
                as the chef intended.
              </p>
              <p>
                Today, UrbanEats partners with over 2,500 restaurants in 50+ cities, employing 
                thousands of delivery riders and supporting local economies. But we're just getting 
                started – our vision is to be the most loved food delivery platform in the world.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
              alt="Food delivery"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-button">
              <span className="text-3xl font-bold">2500+</span>
              <p className="text-sm opacity-90">Restaurant Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To connect people with their favorite food, supporting local restaurants while 
                providing convenient, reliable delivery service that fits seamlessly into modern life.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most loved food delivery platform globally, known for exceptional 
                service, sustainability, and positive impact on communities everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container-main py-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do at UrbanEats.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our passion for food and technology.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-xl font-medium hover:bg-background/90 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
