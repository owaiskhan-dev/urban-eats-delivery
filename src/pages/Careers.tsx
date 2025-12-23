import { MapPin, Clock, Briefcase, ArrowRight, Heart, Users, Zap, Coffee } from 'lucide-react';
import { jobListings } from '@/data/foodData';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Careers = () => {
  const benefits = [
    { icon: Heart, title: 'Health Benefits', description: 'Comprehensive health, dental, and vision coverage' },
    { icon: Coffee, title: 'Free Meals', description: 'Enjoy free meals from our restaurant partners' },
    { icon: Users, title: 'Great Team', description: 'Work with talented, passionate people' },
    { icon: Zap, title: 'Growth', description: 'Career development and learning opportunities' },
  ];

  const handleApply = (jobTitle: string) => {
    toast.success(`Applied for ${jobTitle}!`, {
      description: 'We\'ll review your application and get back to you soon.',
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join the <span className="text-gradient">UrbanEats</span> Team
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Help us transform how people experience food delivery. We're looking for 
                passionate individuals who want to make a difference.
              </p>
              <Button size="lg" className="bg-gradient-primary shadow-button">
                View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-main py-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Work With Us</h2>
          <p className="text-muted-foreground">Great benefits for great people</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card p-6 rounded-xl shadow-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Find your next opportunity</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {jobListings.map((job, index) => (
              <div
                key={job.id}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleApply(job.title)}
                    className="bg-gradient-primary shadow-button shrink-0"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="container-main py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400"
              alt="Team meeting"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
              alt="Team collaboration"
              className="rounded-xl shadow-lg mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"
              alt="Office space"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400"
              alt="Team celebration"
              className="rounded-xl shadow-lg mt-8"
            />
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="section-title mb-6">Our Culture</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At UrbanEats, we believe in creating an environment where everyone can thrive. 
                Our culture is built on collaboration, innovation, and a shared passion for food.
              </p>
              <p>
                We celebrate diversity and encourage our team members to bring their authentic 
                selves to work every day. Whether you're working from our office or remotely, 
                you'll be part of a supportive community.
              </p>
              <p>
                We work hard, but we also know how to have fun. From team lunches to company 
                events, there's always something exciting happening at UrbanEats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Submit Your Resume
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Careers;
