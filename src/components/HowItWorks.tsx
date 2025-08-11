const HowItWorks = () => {
  const steps = [
    {
      icon: "📱",
      title: "Get the Daily Prompt",
      description: "Receive a thoughtful question every day that invites you to share your perspective and experiences."
    },
    {
      icon: "🎥",
      title: "Share Your Video Story",
      description: "Record a short video response and connect with others who share your curiosity and openness."
    },
    {
      icon: "🌍",
      title: "Discover the World",
      description: "Explore videos from people across different cultures, backgrounds, and life experiences."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto">
            Three simple steps to connect with the world around you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-background hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 animate-float">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 