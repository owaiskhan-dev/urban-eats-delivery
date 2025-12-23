import { Calendar, ArrowRight } from 'lucide-react';
import { newsArticles } from '@/data/foodData';
import { Button } from '@/components/ui/button';

const Newsroom = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Newsroom
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest news, announcements, and insights from UrbanEats.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container-main py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <img
              src={newsArticles[0].image}
              alt={newsArticles[0].title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {newsArticles[0].category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {newsArticles[0].title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {newsArticles[0].excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="w-4 h-4" />
              {newsArticles[0].date}
            </div>
            <Button className="bg-gradient-primary shadow-button">
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="container-main py-12">
        <h2 className="section-title mb-8">Latest News</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <article
              key={article.id}
              className="food-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium mb-3">
                  {article.category}
                </span>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Read <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-muted/30 py-16">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Press Inquiries</h2>
            <p className="text-muted-foreground mb-6">
              For media inquiries, interview requests, or press kit access, please contact our communications team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg">
                Download Press Kit
              </Button>
              <Button size="lg" className="bg-gradient-primary shadow-button">
                Contact Press Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newsroom;
